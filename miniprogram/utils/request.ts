/*
 * @Descripttion: 
 * @Author: baihuayang
 * @Date: 2020-03-09 11:43:08
 * @LastEditTime: 2020-03-10 10:47:26
 */

// import { Promise } from 'es6-promise';
const { BASE_API } = require('../config/index');

interface Options {
  BASE_URL?: string;
  url: string;
  method: any;
  data?: object;
  header?: object;
  enableHttp2?: boolean;
}

const request = (options: Options) => {
  // @ts-ignore
  return new Promise<Response>((resolve:any, reject:any) => {
    const Authorization = wx.getStorageSync('token');
    wx.request({
      url: `${options.BASE_URL ? options.BASE_URL : BASE_API}${options.url}`,
      method: options.method,
      data: options.data,
      header:  Authorization ? { ...options.header , Authorization:`Bearer ${Authorization}` } : options.header,
      success: (res:any) => {
        if (res.data.code === '000000') resolve(res.data)
        else reject(res.data);
      }
    })
  })
}

export default request;
