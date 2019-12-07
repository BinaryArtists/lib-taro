import { cache } from "../sdk";

const VER = 'ver';

class VerService {
  constructor () {

  }

  // main.sub.patch
  // 0.1.9
  set (ver: string): void {
    if (!ver) return;

    try {
      const res = cache.getSync(VER);


    } catch (e) {
      // 当前版本是用户机器最新版本
    } finally {
      // 写入最新的版本号
      cache.setSync(VER, ver);
    }
  }
}

export const ver = new VerService();