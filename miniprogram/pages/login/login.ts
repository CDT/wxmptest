Page({
  data: {
    activeTab: 0
  },
  onTabChange(e: WechatMiniprogram.BaseEvent) {
    const index = Number(e.currentTarget.dataset.index)
    this.setData({ activeTab: index })
  },
  onLogin() {
    wx.switchTab({
      url: '/pages/home/home'
    })
  }
})
