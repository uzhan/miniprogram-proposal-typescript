// components/skeleton/skeleton.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgcolor: {
      type: String,
      value: '#FFF'
    },
    selector: {
      type: String,
      value: 'skeleton'
    },
    loading: {
      type: String,
      value: 'shine'
    },
    unit: {
      type: String,
      value: 'px'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loadingAni: ['spin', 'chiaroscuro', 'shine'],
    systemInfo: {},
    skeletonRectLists: [],
    skeletonCircleLists: []
  },

  attached: function() {
    //默认的首屏宽高，防止内容闪现
    const systemInfo = wx.getSystemInfoSync();
    this.setData({
      systemInfo: {
        width: systemInfo.windowWidth,
        height: systemInfo.windowHeight
      },
      loading: this.data.loadingAni.includes(this.data.loading) ? this.data.loading : 'shine'
    })
  },

  ready: function() {
    const _this = this;
    //绘制背景
    wx.createSelectorQuery().selectAll(`.${this.data.selector}`).boundingClientRect().exec(res => {
      _this.setData({
        'systemInfo.height': res[0][0].height + res[0][0].top
      })
    });
    //绘制矩形
    this.rectHandle();
    //绘制圆形
    this.radiusHandle()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    rectHandle() {
      const _this = this;
      //绘制不带样式的节点
      wx.createSelectorQuery().selectAll(`.${this.data.selector} >>> .${this.data.selector}-rect`).boundingClientRect().exec(res => {
        _this.setData({ skeletonRectLists: res[0] })
      })
    },

    radiusHandle() {
      const _this = this;
      //绘制不带样式的节点
      wx.createSelectorQuery().selectAll(`.${this.data.selector} >>> .${this.data.selector}-radius`).boundingClientRect().exec(res => {
        _this.setData({ skeletonCircleLists: res[0] })
      })
    }
  }
})
