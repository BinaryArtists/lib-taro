
import Taro from "@tarojs/taro";

class Cache {

  set (k, v) {
    return Taro.setStorage({
      key: k,
      data: v
    });
  }

  get (k) {
    return Taro.getStorage({
      key: k
    });
  }

  getSync (k) {
    return Taro.getStorageSync(k);
  }

  setSync (k, v) {
    Taro.setStorageSync(k, v);
  }

  rm () {

  }

  cls () {

  }
}

export const cache = new Cache();