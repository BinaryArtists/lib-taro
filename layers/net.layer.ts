import { noop } from '../common';

export interface HTTPConfig {

}

export interface APIConfig {
  commonParams?: any;
  list?: any;
  mainHost?: string;
  mockHost?: string;
}

export interface ReloginHandler {
  (): Promise<any>; 
}
export interface UserSessionControl {
  relogin?: ReloginHandler; 
  login?: ReloginHandler; 
}

export interface GetImagePiping {
  (imageIdOrPath: string | any, defaultImage?: string | any): string | any;
}
export interface NetPipe {
  image: GetImagePiping;
}

/**
 * 
 */
class NetLayer {
  http: HTTPConfig = {

  };
  control: UserSessionControl = {
    
  };
  api: APIConfig = {
    
  };
  pipe: NetPipe = {
    image: noop
  }

  constructor () {

  }

  
}

export const netlayer = new NetLayer();