
import Taro, { useEffect, useState } from '@tarojs/taro';
import { View } from '@tarojs/components';
import './index.scss';
import { StyledButtonProps } from './index.prot';

function StyledButton (props: StyledButtonProps) {
  const { title, onClick } = props;

  const onBtnClick = () => {
    onClick && onClick();
  }
  return (
    <View className='StyledButton' onClick={onBtnClick}>
      {title}
    </View>
  );
}

StyledButton.defaultProps = {
  title: '',
  onClick: () => {}
};

export default StyledButton;
