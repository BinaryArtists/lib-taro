import Taro from "@tarojs/taro";
import {cache} from '../sdk/cache';

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

  async getUserId () {
    const res = await cache.get('userId');

    return res.data;
  }

  

  async getToken () {
    const res = await cache.get('token');

    return res.data
  }

  setToken (token: string) {
    cache.setSync('token', token);
  }

  setUserId (userId: number) {
    cache.setSync('userId', userId);
  }

  getTokenSync (): string {
    return cache.getSync('token');
  }

  getUserIdSync (): number {
    return cache.getSync('userId');
  }
}

export const user = new User();