import Taro from "@tarojs/taro";

class Loading {
	private isLoading: boolean = false;

	constructor () {
		
	}

	show (title:string ='加载中', force:boolean = false) {
		if (this.isLoading && !force) {
			return
		}

		this.isLoading = true;
		if (Taro.showLoading) {
			Taro.showLoading({
				title:title,
				mask:true
			})
		}else{
			Taro.showNavigationBarLoading() //导航条加载动画
		}
	}

	hide () {
		let duration = 0;
		if (this.isLoading) {
			this.isLoading = false;
			if (Taro.hideLoading) {
				Taro.hideLoading()
			} else {
				Taro.hideNavigationBarLoading(); //导航条加载动画
			}
			duration = 500;
		}
		// 设定隐藏的动画时长为500ms,防止直接toast时出现问题
		return new Promise(resolve => setTimeout(resolve,duration))
	}

}

export const loading = new Loading();










