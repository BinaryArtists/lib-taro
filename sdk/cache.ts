
import Taro from "@tarojs/taro";

class Cache {

  set (key, data) {
    return Taro.setStorage({
      key,
      data
    });
  }

  get (key) {
    return Taro.getStorage({
      key
    });
  }

  getSync (k) {
    return Taro.getStorageSync(k);
  }

  setSync (k, v) {
    Taro.setStorageSync(k, v);
  }

  rm (key) {
    return Taro.removeStorage({ key });
  }

  rmSync (key) {
    Taro.removeStorageSync(key);
  }

  cls () {
    return Taro.clearStorage();
  }

  clsSync () {
    Taro.clearStorageSync();
  }
}

export const cache = new Cache();