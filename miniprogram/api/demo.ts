import request from '../utils/request'

export const demo = (data:object) =>
  request({
    BASE_URL: '', //不在全局接口配置中 接口单独使用时可以配置，针对当前接口
    url: 'demo', // 接口地址
    method: 'GET', // HTTP 请求方法 支持GET，POST等参数 具体以小程序request方法支持为准 https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html
    data // 与axios的区别就是 不区分get post等请求体，🙆‍♂统一参数使用data字段
  })
