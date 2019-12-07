import { View, Image, Text, Input, ScrollView, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss';
import { string } from 'prop-types';
import { getImage } from '@config/request';


function Banner(props) {
  const res = Taro.getSystemInfoSync()
  return (
    <View>

      <Swiper
        style={`height: ${res.windowWidth / 2.5}px`}
        indicatorColor='#999'
        indicatorActiveColor='#333'
        current={0}
        duration={500}
        interval={5000}
        circular={true}
        autoplay={true}
        indicatorDots={true}
      >
        {
          props.ad && props.ad.map((item, key) => (
            <SwiperItem key={item.id}>
              <View className="banner">
                  <Image className="banner_img" src={getImage(item.pic)} />
              </View>
            </SwiperItem>
          ))
        }
      </Swiper>

    </View>


  )
}

Banner.defaultProps = {
  ad: []
}


export default Banner;