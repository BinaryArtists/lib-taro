
import Taro, { Component, useEffect, useState } from '@tarojs/taro';
import { View, Button, Text, Image } from '@tarojs/components';
import './index.scss';
import { ButtonItemProps } from './index.prot';
import classNames from 'classnames';

function ButtonItem (props: ButtonItemProps) {
  const {
    openType, loading, disabled, text, onClick, onGetUserInfo, type, plain, imageSrc, imageStyle
  } = props;

  const getCls = (base) => {
    return classNames(
      base,
      type === 'primary' && `${base}--primary`,
      plain && `${base}--plain`,
      disabled && `${base}--disabled`
    );
  }

  const onButtonClick = (e) => {
    onClick && onClick(e);
  }
  const onButtonGetUserInfo = (e) => {
    onGetUserInfo && onGetUserInfo(e);
  }

  return (
    <View className='button-wrap'>
      <Button
        className={getCls('comp-button')}
        // style={{"background-color": clear}}
        loading={loading}
        disabled={disabled}
        openType={openType}
        hoverClass='none'
        onClick={onButtonClick}
        onGetUserInfo={onButtonGetUserInfo}
      >

        { imageSrc && <Image className="comp-button__img" style={imageStyle} src={imageSrc}></Image>}
      
        <Text
          className={getCls('comp-button__txt')}
        >
          {text}
        </Text>
      </Button>
    </View>
  );
}

ButtonItem.defaultProps = {
  compStyle: '',
  textStyle: '',
  openType: '',
  plain: false,
  loading: false,
  disabled: false,
  onClick: () => {},
  onGetUserInfo: () => {}
};

export default ButtonItem;
