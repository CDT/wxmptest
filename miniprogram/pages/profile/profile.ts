Page({
  onShow() {
    const tabBar = this.getTabBar ? this.getTabBar() : null
    if (tabBar && tabBar.setData) {
      tabBar.setData({ selected: 3 })
    }
  }
})
