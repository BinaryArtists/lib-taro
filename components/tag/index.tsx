import { View, } from '@tarojs/components'
import './index.scss';
import { AtTag } from 'taro-ui'


function Tag(props) {
  return (
    <View style={{margin:'0 5px 0 5px',display:'inline-block',}}>
      <AtTag circle size='small'>{props.data}</AtTag>
    </View>
  )
}

export default Tag;