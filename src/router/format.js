export default [
  {
    name: 'home',
    path: '/',
    meta: {
      name: '首页',
      icon: 'Home'
    },
    source: '../views/Home.svelte'
  },
  {
    name: 'days30',
    meta: {
      name: '30天从0到1学Svelte',
      icon: 'Album'
    },
    children: [
      {
        name: 'countDown',
        path: '/countDown',
        meta: {
          name: '倒计时示例'
        },
        source: '../views/days30/CountDown.svelte'
      },
    ]
  },
  {
    name: 'test',
    meta: {
      name: '起始测试页面',
      icon: 'List'
    },
    children: [
      {
        name: 'about',
        path: '/about',
        meta: {
          name: '关于'
        },
        source: '../views/test/About.svelte'
      },
      {
        name: 'detail',
        path: '/about/:id',
        params: {
          id: 101
        },
        query: {
          order: 1
        },
        meta: {
          name: '详情'
        },
        source: '../views/test/Detail.svelte'
      },
    ]
  },
  {
    name: 'notFound',
    path: '*',
    meta: {
      name: '404',
    },
    source: '../views/NotFound.svelte'
  }
]