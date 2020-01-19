import Taro from '@tarojs/taro';
import { View, Button, Image } from '@tarojs/components';
import './index.scss';
import { AuthMenuItemProps } from './index.prot';
import { AtBadge, AtButton } from 'taro-ui'

function AuthMenuItem (props: AuthMenuItemProps) {
  let {
    openType, 
    onClick, 
    entry
  } = props;

  const onButtonClick = (e) => {
    onClick && onClick(e);
  }
  const onButtonGetUserInfo = (e) => {
    // onGetUserInfo && onGetUserInfo(e);
  }

  return (
    <Button
      className='AuthMenuItem'
      hoverClass='none'
      openType={openType}
      onClick={onButtonClick.bind(this, entry)}
      onGetUserInfo={onButtonGetUserInfo}
    >
        <View className={entry.isNew ? 'AuthMenuItem-image AuthMenuItem-image-active' : 'AuthMenuItem-image'}>
        {
          entry.active>0 ?
          <AtBadge value={entry.active} maxValue={99}>
            <Image className={'AuthMenuItem-image-src'} src={entry.icon}></Image>
          </AtBadge>  
          :
          <Image className={'AuthMenuItem-image-src'} src={entry.icon}></Image>
        }
        </View>
        <View className='AuthMenuItem-text'>{entry.text}</View>
    </Button>
  );
}

AuthMenuItem.defaultProps = {
  openType: 'getUserInfo',
  onClick: () => {},
  entry: {}
};

export default AuthMenuItem;
