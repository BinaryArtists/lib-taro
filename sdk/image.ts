import Taro from "@tarojs/taro";

class ImageSDK {
  constructor () {

  }

  async chooseOne () {
    
    const res = await Taro.chooseImage({count: 1});

    return res.tempFilePaths[0];
  }

  async chooseOneAndUpload (imageUploadApi) {
    const imageFileUrl = await this.chooseOne();
    // const filePieces = imageFileUrl.split('.');
    // const fileName = filePieces[filePieces.length-1];


    let CompressPicture = await Taro.compressImage({
      src: imageFileUrl,
      quality: 70,
      success(res) {
        console.log('压缩后图片', res)
      }
    })
    console.log('压缩前后对比：', CompressPicture.tempFilePath, imageFileUrl)


    const res = await Taro.uploadFile({
      url: imageUploadApi,
      filePath: CompressPicture.tempFilePath,
      name: 'image',
      header: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (res.statusCode == 200) {
      return JSON.parse(res.data)
    } else {
      console.error(res);

      throw new Error('上传图片失败');
    }
  }

  async upload(imageFileUrl: string, imageUploadApi: string) {
    const res = await Taro.uploadFile({
      url: imageUploadApi,
      filePath: imageFileUrl,
      name: 'image',
      header: {
        'Content-Type': 'multipart/form-data'
      }
    });

    if (res.statusCode == 200) {
      return JSON.parse(res.data)
    } else {
      console.error(res);

      throw new Error('上传图片失败');
    }
  }

}

export const image = new ImageSDK();