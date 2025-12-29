Page({
  data: {
    sections: [
      {
        title: '运维管理',
        items: [
          { name: '我的工单', short: '工', color: '#5b7cfe' },
          { name: '通话记录', short: '话', color: '#f29a46' },
          { name: '工单登记', short: '登', color: '#55b374' },
          { name: '工单查询', short: '查', color: '#6d8df8' },
          { name: '运维报告', short: '报', color: '#58b2b2' }
        ]
      },
      {
        title: '设备管理',
        items: [
          { name: '设备台账', short: '台', color: '#5b7cfe' },
          { name: '维修登记', short: '修', color: '#7c8ed8' },
          { name: '维修记录', short: '记', color: '#6aa7f2' },
          { name: '维修任务', short: '任', color: '#63b4a2' },
          { name: '巡检任务', short: '巡', color: '#f2994a' }
        ]
      }
    ]
  },
  onShow() {
    const tabBar = this.getTabBar ? this.getTabBar() : null
    if (tabBar && tabBar.setData) {
      tabBar.setData({ selected: 1 })
    }
  },
  onGridTap(e: WechatMiniprogram.BaseEvent) {
    const name = e.currentTarget.dataset.name || '按钮'
    wx.showToast({
      title: `you clicked ${name}`,
      icon: 'none'
    })
  }
})
