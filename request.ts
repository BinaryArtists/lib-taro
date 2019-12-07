import Taro from "@tarojs/taro";
import { netlayer } from './layers/net.layer';
import { toast, user } from './sdk';

// 封装请求
declare type Methods = "GET" | "OPTIONS" | "HEAD" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
declare type Headers = { [key : string]: string };
declare type Datas = {method : Methods; [key: string] : any;};
interface Options {
  url: string;
  host?: string;
  method?: Methods;
  data?: Datas;
  header?: Headers;

  // User Defined
  needLogin?: boolean;
}
interface Response {
    cookies: Array<any>;
    data: any;
    errMsg: string;
    header: object;
    statusCode: number;
    success: boolean;
}

export class Request {
    // 登陆时的promise
    static loginReadyPromise: Promise<any> = Promise.resolve();

    // 正在登陆
    static isLoading: boolean = false;

    // 导出的API对象
    static apiLists: { [key: string]: () => any; } = {};

    // 开始处理options
    static combineOptions(opts, data: Datas, method: Methods): Options {
        typeof opts === 'string' && (opts = {url: opts})
        let header = {
            'content-type': 'application/json',
            ...opts.header
        }

        if (user.getTokenSync()) header['token'] = user.getTokenSync();
        if (user.getUserIdSync()) header['userId'] = user.getUserIdSync();

        let combinedOptions = {
            data: { ...netlayer.api.commonParams, ...opts.data, ...data },
            method: opts.method || data.method || method || 'GET',
            url: `${opts.host || netlayer.api.mainHost}${opts.url}`,
            header
        }

        return combinedOptions;
    }

    // 登陆
    static login () {
        if (!this.isLoading) {
            this.loginReadyPromise = this.onLogin();
        }
        return this.loginReadyPromise;
    }

    static onLogin () {
        this.isLoading = true;
        return new Promise(async (resolve, reject) => {
            // 获取code
            const { code } = await Taro.login();

            const { data } = await Taro.request({
                url: `${netlayer.api.mainHost}${netlayer.api.list.wxLogin}`,
                data: {code: code}
            })

            if (data.code !== 0 || !data.data || !data.data.token) {
                reject()
                // return
            }
        })

    }

    /** 
     * 基于 Taro.request 的 request 请求
     * 
     * */ 
    static async request(opts: Options) {
        // Taro.request 请求
        const res: Response = <Response> await Taro.request(opts);

        console.log(`[OUT][${new Date().toLocaleString()}] ==> `, res);

        // 请求失败
        if (res.statusCode === 403) {
            await this.login();
            return this.request(opts);
        }

        // 请求成功
        if (res.statusCode == 200) {
            res.success = true;

            // 如果是登陆接口
            const data: any = res.data;

            if (data.token) {
                user.setToken(data.token);
                user.setUserId(data.userId);
            }

            return res.data;
        }

        // 请求错误
        const edata = { ...res.data, err : (res.data && res.errMsg) || '网络错误 ~'};

        toast.show(edata.err);
        
        throw new Error(edata.err);
    }


    /** 
     * 创建请求函数
    */
   static creatRequests(opts: Options | string) : () => {} {
       // ⚠️：这是请求的实际方法
       return async (data: any = {}, method: Methods = "GET", needLogin: boolean = false) => {
           const _opts = this.combineOptions(opts, data, method)
           _opts.needLogin = needLogin;

           console.log(`[IN][${new Date().toLocaleString()}] ==> ${method}, ${opts}, `, data);

           const res = await this.request(_opts)
            return res;
        }
   }

   static creatRestfulRequests() : () => {} {
    return async (url: string = '', data: any = {}, method: Methods = "GET") => {
        const _opts = this.combineOptions(url, data, method)
        const res = await this.request(_opts)
        return res;
    }
    }

   /** 
    * 抛出API方法
   */
   static getApiList(requestConfig) {
        if (!Object.keys(requestConfig).length) {
            return {}
        }
        Object.keys(requestConfig).forEach((key)=>{
            this.apiLists[key] = this.creatRequests(requestConfig[key])
        })
        return this.apiLists
   }
}

const Api = Request.getApiList(netlayer.api.list)

export default Api as any;

export const Restful = Request.creatRestfulRequests();