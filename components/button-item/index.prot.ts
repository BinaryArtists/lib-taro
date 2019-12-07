
export interface ButtonItemProps {
  type: 'default' | 'primary' | 'disabled' | 'plain';
  compStyle?: string;

  textClass?: string;
  textStyle?: any;

  imageStyle?: any;
  imageSrc?: any;

  openType?: "getUserInfo" | "contact" | "share" | "getPhoneNumber" | "launchApp" | "openSetting" | "feedback" | "getRealnameAuthInfo" | "getAuthorize" | "lifestyle" | "contactShare" | undefined; // 
  loading?: boolean;
  disabled?: boolean;
  text?: string;
  onClick?: Function;
  onGetUserInfo?: Function;

  [ propName : string ] : any; // type, plain
}