export const repeat = (str = '0', times) => (new Array(times + 1)).join(str);

// 时间前面 +0 
export const pad = (num, maxLength = 2) => repeat('0', maxLength - num.toString().length) + num;

// 时间格式装换函数

export const formatTime = time => {
    `${pad(time.getHours())}:${pad(time.getMinutes())}:${pad(time.getSeconds())}.${pad(time.getMilliseconds(), 3)}`
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