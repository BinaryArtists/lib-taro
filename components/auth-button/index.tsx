import Taro, { Component, useEffect, useState } from '@tarojs/taro';
import { View, Button, Text, Image } from '@tarojs/components';
import './index.scss';
import classNames from 'classnames';
import { postcss } from '../../../utils/style';
import { AuthButtonProps } from './index.prot';

function AuthButton (props: AuthButtonProps) {
  const {
    compStyle,

    type, 
    openType, 

    text, 
    imageSrc, 
    imageStyle,

    onClick, 
    // onGetUserInfo, 

  } = props;

  const getCls = (base) => {
    return classNames(
      base,
      type === 'primary' && `${base}--primary`,
      type === 'plain' && `${base}--plain`,
      type === 'disabled' && `${base}--disabled`,
      type === 'primary' && `${base}--disabled`,
    );
  }

  const onButtonClick = (e) => {
    onClick && onClick(e);
  }
  const onButtonGetUserInfo = (e) => {
    // onGetUserInfo && onGetUserInfo(e);
  }

  return (
    <View className='AuthButton'>
      <Button
        className={getCls(compStyle)}
        hoverClass='none'
        // style={{"background-color": clear}}
        // loading={loading}
        disabled={type === 'disabled'}
        openType={openType}
        
        onClick={onButtonClick}
        onGetUserInfo={onButtonGetUserInfo}
      >

        { imageSrc && <Image className={compStyle+"__img"} style={imageStyle} src={imageSrc}></Image>}
      
        <Text
          className={getCls(compStyle+'__txt')}
        >
          {text}
        </Text>
      </Button>
    </View>
  );
}

AuthButton.options = {
  compStyle: 'comp-button',
  textStyle: 'default',
  openType: 'getUserInfo',
  plain: false,
  loading: false,
  disabled: false,
  onClick: () => {},
  // onGetUserInfo: () => {}
};

export default AuthButton;
