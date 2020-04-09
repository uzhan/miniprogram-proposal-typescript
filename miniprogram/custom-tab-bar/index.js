Component({
  data: {
    selected: 0,
    color: "#8E8E8E",
    selectedColor: "#212020",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/image/icon_can.png",
        selectedIconPath: "/image/icon_acan.png",
        text: "点餐",
      },
      {
        pagePath: "/pages/order/order",
        iconPath: "/image/icon_order.png",
        selectedIconPath: "/image/icon_aorder.png",
        text: "订单",
      },
      {
        pagePath: "/pages/my/my",
        iconPath: "/image/icon_my.png",
        selectedIconPath: "/image/icon_amy.png",
        text: "我的",
      },
    ],
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index,
      })
    },
  },
})
