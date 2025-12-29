Page({
  data: {
    tabs: [
      { name: '消息', badge: '1003' },
      { name: '公告', badge: '3' }
    ],
    activeTab: 0,
    messages: [
      {
        title: '工单催单提醒',
        desc: '触发一条催单提醒，点击查看详情',
        time: '系统 | 2025/12/25 11:46'
      },
      {
        title: '工单超时提醒',
        desc: '触发一条超时提醒，点击查看详情',
        time: '系统 | 2025/12/20 11:37'
      },
      {
        title: '工单催单提醒',
        desc: '触发一条催单提醒，点击查看详情',
        time: '系统 | 2025/12/18 12:36'
      },
      {
        title: '您明天有值班任务',
        desc: '2025-12-17，总值08:00-次日08:00',
        time: '系统 | 2025/12/16 18:00'
      },
      {
        title: '工单催单提醒',
        desc: '触发一条催单提醒，点击查看详情',
        time: '系统 | 2025/12/15 11:26'
      },
      {
        title: '工单超时提醒',
        desc: '触发一条超时提醒，点击查看详情',
        time: '系统 | 2025/12/12 09:18'
      }
    ]
  },
  onTabChange(e) {
    const index = e.currentTarget.dataset.index
    this.setData({ activeTab: index })
  },
  onShow() {
    const tabBar = this.getTabBar ? this.getTabBar() : null
    if (tabBar && tabBar.setData) {
      tabBar.setData({ selected: 2 })
    }
  }
})
