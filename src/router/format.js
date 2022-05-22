export default [
  {
    name: 'home',
    path: '/',
    meta: {
      name: '首页'
    },
    source: '../views/Home.svelte'
  },
  {
    name: 'about',
    path: '/about',
    meta: {
      name: '关于'
    },
    source: '../views/About.svelte'
  },
  {
    name: 'detail',
    path: '/about/:id',
    meta: {
      name: '详情'
    },
    source: '../views/Detail.svelte'
  },
  {
    name: 'notFound',
    path: '*',
    meta: {
      name: '404'
    },
    source: '../views/NotFound.svelte'
  }
]