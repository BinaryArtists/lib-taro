import Taro from "@tarojs/taro";

/**
 * @wx-doc: https://developers.weixin.qq.com/miniprogram/dev/reference/api/Page.html#onPullDownRefresh
 */
class Refresh {
  constructor () {

  }

  start (): Promise<any> {
    return Taro.startPullDownRefresh();
  }

  stop (): void  {
    Taro.stopPullDownRefresh();
  }
}


export const refresh = new Refresh();