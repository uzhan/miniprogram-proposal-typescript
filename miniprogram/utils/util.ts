export const formatTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return (
    [year, month, day].map(formatNumber).join('/') +
    ' ' +
    [hour, minute, second].map(formatNumber).join(':')
  )
}

const formatNumber = (n: number) => {
  const s = n.toString()
  return s[1] ? s : '0' + s
}

// 每个页面自定义tabbar实例不一样 需要重新选择选中态
export const selectedTabbar = (_this:any, selected:number) => {
  if (typeof _this.getTabBar === 'function' && _this.getTabBar()) {
    _this.getTabBar().setData({ selected })
  }
}
