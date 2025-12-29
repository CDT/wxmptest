Page({
  data: {
    tabs: ['工单', '维修', '任务', '巡检'],
    activeTab: 0
  },
  onTabChange(e: WechatMiniprogram.BaseEvent) {
    const index = e.currentTarget.dataset.index
    this.setData({ activeTab: index })
  },
  onShow() {
    const tabBar = this.getTabBar ? this.getTabBar() : null
    if (tabBar && tabBar.setData) {
      tabBar.setData({ selected: 0 })
    }
  }
})
