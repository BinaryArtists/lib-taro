
export interface AuthButtonProps {
  type: 'default' | 'primary' | 'disabled' | 'plain';

  /**
   * 组件整体样式
   * 
   * 规则:
   * 
   * .button {
   * 
   *    &--default {
   *    }
   * 
   *    &--primary {
   *    }
   * 
   *    &__img {
   *    }
   * 
   *    &__txt {
   * 
   *        &--default {
   *        }
   * 
   *        &--primary {
   *        }
   *    }
   * }
   */
  compStyle?: string;

  textClass?: string;
  textStyle?: any;

  imageStyle?: any;
  imageSrc?: any;

  openType?: "getUserInfo" /*默认*/ | "contact" | "share" | "getPhoneNumber" | "launchApp" | "openSetting" | "feedback" | "getRealnameAuthInfo" | "getAuthorize" | "lifestyle" | "contactShare" | undefined; // 
  // loading?: boolean;
  disabled?: boolean;
  text?: string;
  onClick?: Function;
  // onGetUserInfo?: Function;

  [ propName : string ] : any; // type, plain
}

// 例子

// <AuthButton 
//   type='default'
//   compStyle='comp-button'

//   imageStyle={{ width: "16px", height: "16px" }}
//   imageSrc={chatPng}

//   text='评论'
//   openType="getUserInfo"
//   onClick={tips}></AuthButton>