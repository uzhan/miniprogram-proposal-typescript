// index.ts
// 获取应用实例
import { selectedTabbar } from '../../utils/util'
// const app = getApp<IAppOption>()
interface PageData {}
interface PageInstance {}

Page<PageData, PageInstance>({
  data: {
  },
  onLoad() {
  },
  /*
  * 每次页面显示的时候重新选择tabbar的选中态，避免自定义tabbar闪屏。
  * 只有在tabbar页面才需要重新选择
  * 参数为当前this，第二参数为页面在tabbar所在的index索引
  */
  onShow() {
    selectedTabbar(this, 1)
  }
})
