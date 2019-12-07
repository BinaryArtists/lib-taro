import { cache } from "../sdk";
import { cachelayer } from "@lib-taro/layers/cache.layer";

const VER = 'ver';

//假定字符串的每节数都在5位以下
//去除数组空值||空格值
const trim = (self): Array<any> => {
  var arr = new Array<any>();
  self.forEach(function(e) {
    if(e.match(/\S+/))  arr.push(e);
  })
  return arr;
}

//提取数字部分
const toNum = (a) => {
  var a=a.toString();
  var c = trim(a.split(/\D/));
  var num_place=["","0","00","000","0000"],r=num_place.reverse();
  for (var i=0;i<c.length;i++){
    var len = c[i].length;
    c[i] = r[len]+c[i];
  }
  var res = c.join('');
  return res;
} 

// 提取字符
const toChar = (a) => {
  var a=a.toString();
  var c=a.split(/\.|\d/).join('');

  return c;
}

// 获取新一点的版本
const newVersion = (a, b) => {
  var _a1=toNum(a),_a2= toChar(a),
    _b1=toNum(b),_b2= toChar(b);

  if(_a1>_b1) return a;
  if(_a1<_b1) return b;

  if(_a1===_b1)  {
      _a2=_a2.charCodeAt(0).toString(16);
      _b2=_b2.charCodeAt(0).toString(16);

      if (_a2>_b2) return a;
      if(_a2<_b2)  return b;
      if(_a2===_b2) return a;
  }
}

class VerService {
  constructor () {

  }

  // main.sub.patch
  // 0.1.9
  set (ver: string): void {
    if (!ver) return;

    try {
      const res = cache.getSync(VER);
      const newVer = newVersion(ver, res);

      // 版本号不同，则请缓存
      if (ver != newVer) {
        // cache.rmSync(VER);
        cachelayer.control.clear();
      }
    } catch (e) {
      // 当前版本是用户机器最新版本
    } finally {
      // 写入最新的版本号
      cache.setSync(VER, ver);
    }
  }
}

export const ver = new VerService();