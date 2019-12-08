import Taro from "@tarojs/taro";
import {cache} from '../sdk/cache';

const TOKEN = 'token';
const USERID = 'userId';
const LOGIN_INFO = 'loginInfo';
const NEWER = 'newer';

class User {
  constructor () {

  }

  /** {
  "errMsg": "getUserInfo:ok",
  "userInfo": {
    "nickName": "李杰",
    "gender": 1,
    "language": "zh_CN",
    "city": "Pudong New District",
    "province": "Shanghai",
    "country": "China",
    "avatarUrl": "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIjxsknaTJtJuS0lS6gtZNBTLDUhZmWKb3lia9zML0ZhLGNxtPUn7hLYibpg5Zoz8w9mSvntKx8G7OQ/132"
  },
  } */
  info () {
    return Taro.getUserInfo();
  }

  /** { userName, postalCode, provinceName, cityName, countyName, detailInfo, nationalCode, telNumber } */
  addr () {
    return Taro.chooseAddress();
  }

  /**
   * UserId
   */
  setUserId (userId: number) {
    cache.setSync(USERID, userId);
  }

  async getUserId () {
    const res = await cache.get(USERID);

    return res.data;
  }

  getUserIdSync (): number {
    return cache.getSync(USERID);
  }

  rmUserIdSync (): void {
    cache.rmSync(USERID);
  }

  /**
   * Token
   */
  async getToken () {
    const res = await cache.get(TOKEN);

    return res.data
  }

  setToken (token: string) {
    cache.setSync(TOKEN, token);
  }

  getTokenSync (): string {
    return cache.getSync(TOKEN);
  }

  rmTokenSync () {
    cache.rmSync(TOKEN);
  }

  /**
   * loginInfo
   */
  getLoginInfoSync (): any {
    return cache.getSync(LOGIN_INFO);
  }
  setLoginInfoSync (res): void {
    cache.setSync(LOGIN_INFO, res);
  }
  rmLoginInfoSync (): void {
    cache.rmSync(LOGIN_INFO);
  }

  /**
   * Nnewer
   */
  isNewer (): boolean {
    if (Taro.getStorageSync(NEWER) === '') {
      Taro.setStorageSync(NEWER, false)
      return true;
    }

    return false;
  }
  

  /**
  * Clear
  */
  clear (): void {
    this.rmTokenSync();

    this.rmUserIdSync();

    this.rmLoginInfoSync();
  }
}

export const user = new User();