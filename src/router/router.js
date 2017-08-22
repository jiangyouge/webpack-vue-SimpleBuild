import App from '../App.vue'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../components/home/Home.vue')), 'home')
  },{
    path: '/member',
    component: r => require.ensure([], () => r(require('../components/member/member.vue')), 'member')
  },{
    path: '/shopcar',
    component: r => require.ensure([], () => r(require('../components/shopcar/shopcar.vue')), 'shopcar')
  },{
    path: '/search',
    component: r => require.ensure([], () => r(require('../components/search/search.vue')), 'search')
  }]
}]