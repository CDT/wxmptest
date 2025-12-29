Page({
  data: {
    activeTab: 0
  },
  onTabChange(e) {
    const index = Number(e.currentTarget.dataset.index)
    this.setData({ activeTab: index })
  },
  onLogin() {
    wx.switchTab({
      url: '/pages/home/home'
    })
  }
})
