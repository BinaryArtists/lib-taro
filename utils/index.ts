export const repeat = (str = '0', times) => (new Array(times + 1)).join(str);

// 时间前面 +0 
export const pad = (num, maxLength = 2) => repeat('0', maxLength - num.toString().length) + num;

// 时间格式装换函数

export const formatTime = time => {
    `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}.${pad(time.getMilliseconds(), 3)}`
}

export const len = (arrOrObj) => {
if (!arrOrObj) return null;
if (arrOrObj instanceof Array) {
    if (arrOrObj.length) return arrOrObj.length;
    return null;
}
if (arrOrObj instanceof Object) {
    if (Object.keys(arrOrObj).length) return Object.keys(arrOrObj).length;
    return null;
};
if (typeof arrOrObj == 'string') {
    return arrOrObj.length;
}

return null;
} 

export const noop = () => {

}

export const anonymousify = (str) => {
    if(null != str && str != undefined) {
        if (str.length <= 3){
            return "*" + str.substring(1,str.length);
        } else if(str.length > 3 && str.length <= 6){
            return "**" + str.substring(2,str.length);
        } else if(str.length > 6){
            return str.substring(0,2) + "****" + str.substring(6,str.length)
        }
    } else {
        return "";
    }
}

// 将骆驼命名规则的字符串转换成使用短横线命名法的字符串

export const camel2kebab = (str) => {
    return str.replace(/[A-Z]/g, function(item) {
        return '-'+item.toLowerCase()
    })
}

// 将短横线命名法的字符串转换成使用骆驼命名规则的字符串

export const kebab2camel = (str) => {
    return str.replace(/-([a-z])/g, function(keb, item) {
        return item.toUpperCase();
    } )
}

export * from './style';