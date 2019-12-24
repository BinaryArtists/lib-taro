import Taro, { useRouter } from '@tarojs/taro';
import { WebView } from '@tarojs/components';
import './index.scss'

function WebPage () {
  const router = useRouter();
  const { url } = router.params;

  console.info('nav => ', url);

  const handleMessage = () => {}

  return (
    <WebView src={url}></WebView>
    // <WebView src='https://mp.weixin.qq.com/s/hGjO276tZH5iEJs6nk3u-A' onMessage={handleMessage} />
  )
}

WebPage.config = {
  navigationBarTitleText: '肆行',
  enablePullDownRefresh: false
}

export default WebPage;
