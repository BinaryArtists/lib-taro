
export interface AuthMenuItemProps {
  openType?: "getUserInfo" /*默认*/ | "contact" | "share" | "getPhoneNumber" | "launchApp" | "openSetting" | "feedback" | "getRealnameAuthInfo" | "getAuthorize" | "lifestyle" | "contactShare" | undefined;
  onClick?: Function;
  entry: any;
  
  [ propName : string ] : any; // type, plain
}