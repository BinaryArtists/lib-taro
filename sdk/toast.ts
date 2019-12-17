import Taro from "@tarojs/taro";

class Toast {
	/** 
	 * 提示信息
	*/
	show (title: string, onHide?: () => void) {
		Taro.showToast({
			title: title,
			icon: 'none',
			mask: true,
			duration: 1500
		});

		// 去除结束回调函数
		if (onHide) {
			setTimeout(() => {
				onHide();
			}, 500);
		}
	}

	success (title, duration = 1500) {
		Taro.showToast({
			title: title,
			icon: 'success',
			duration: duration,
			mask:true
    })
    
		if (duration > 0) {
			return new Promise(resolve => setTimeout(resolve,duration))
		}
	}
}

export const toast = new Toast();





