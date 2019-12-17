import Taro, { useRouter } from "@tarojs/taro";

function encodeParams (obj) {
  var pairs: Array<string> = [];

  for (var key in obj) {
    var value = obj[key]
    if (value instanceof Array) {
      for (var i = 0; i < value.length; ++i) {
        pairs.push(encodeURIComponent(key + '[' + i + ']') + '=' + encodeURIComponent(value[i]));
      }
      continue
    }
    pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
  }

  return pairs.join('&');
}

function encodeURL (url, obj) {
  if (!url) return '';
  if (!obj) return url;
  
  return `${url}?${encodeParams(obj)}`;
}

/**
 * 导航
 */

class Nav {
  router () {
    
  }

  to (url: string, params: object = {}): Promise<any> {
    const encodedUrl: string = encodeURL(url, params);

    console.log('[nav] to ==> ', encodedUrl);

		return Taro.navigateTo({
      url: encodedUrl
    });
	}

  back (delta: number = 1): Promise<any> {

    console.log('[nav] back ==> ', delta);

    return Taro.navigateBack({ delta });
  }

  redirect (url, params): Promise<any> {
    const encodedUrl: string = encodeURL(url, params);
    console.log('[nav] redirect ==> ', encodedUrl);

    return Taro.redirectTo({
      url: encodedUrl
    });
  }

  loading () {
		Taro.showNavigationBarLoading()
	}

	unloading () {
		Taro.hideNavigationBarLoading()
	}
}

export const nav = new Nav();