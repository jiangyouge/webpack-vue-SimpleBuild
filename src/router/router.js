import App from '../App.vue'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../components/home/Home.vue')), 'home')
  },{
    path: '/home',
    component: r => require.ensure([], () => r(require('../components/Home/Home.vue')), 'home')
  },{
    path: '/item',
    component: r => require.ensure([], () => r(require('../components/item/item.vue')), 'item') 
  },{
    path: '/score',
    component: r => require.ensure([], () => r(require('../components/score/score.vue')), 'score') 
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