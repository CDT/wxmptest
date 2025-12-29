Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: 'pages/work/work',
        text: '待办',
        icon: '/assets/tab/todo.png',
        iconActive: '/assets/tab/todo-active.png'
      },
      {
        pagePath: 'pages/home/home',
        text: '首页',
        icon: '/assets/tab/home.png',
        iconActive: '/assets/tab/home-active.png'
      },
      {
        pagePath: 'pages/messages/messages',
        text: '消息',
        icon: '/assets/tab/msg.png',
        iconActive: '/assets/tab/msg-active.png',
        badge: '99+'
      },
      {
        pagePath: 'pages/profile/profile',
        text: '我的',
        icon: '/assets/tab/me.png',
        iconActive: '/assets/tab/me-active.png'
      }
    ]
  },
  pageLifetimes: {
    show() {
      const pages = getCurrentPages()
      const current = pages[pages.length - 1]
      const route = current ? current.route : ''
      const index = this.data.list.findIndex(item => item.pagePath === route)
      if (index > -1 && index !== this.data.selected) {
        this.setData({ selected: index })
      }
    }
  },
  methods: {
    onSwitchTab(e) {
      const index = Number(e.currentTarget.dataset.index)
      const path = e.currentTarget.dataset.path
      if (!path) {
        return
      }
      this.setData({ selected: index })
      wx.switchTab({
        url: `/${path}`,
        fail: () => {
          wx.showToast({
            title: '页面切换失败',
            icon: 'none'
          })
        }
      })
    }
  }
})
