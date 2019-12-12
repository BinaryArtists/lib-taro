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

  constructor () {
  }
}

export const sessionlayer = new SessionLayer();