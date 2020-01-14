import { BooleanFunction } from "@lib-taro/types/func.type";

interface ReloginHandler {
  (): Promise<any>; 
}
interface UserSessionControl {
  relogin?: ReloginHandler; 
  login?: ReloginHandler; 
}

/**
 * 
 */
class SessionLayer implements UserSessionControl {
  relogin?: ReloginHandler; 
  login?: ReloginHandler; 
  isLogin?: BooleanFunction;

  constructor () {
  }
}

export const sessionlayer = new SessionLayer();