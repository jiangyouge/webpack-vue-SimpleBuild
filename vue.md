## ref (让父组件能访问到子组件的数据)
* ref: 为子组件指定一个索引ID，给元素或组件注册引用信息。
* ref: refs是一个对象，包含所有的ref组件
* <div id="parent">
    <user-profile ref="profile"></user-profile>
  </div>
  var parent = new Vue({el: '#parent'})
  /*访问子组件*/
  var child = parent.$refs.profile
  其中$表示refs为vue对象，而不是普通的js对象

## props (让子组件能访问到父组件的数据)(c)
* Vue.component('child',{
  //声明props
  props:['message'],
  //类似于data,可直接用在模版中
  //在vue实例中可以以'this.message'使用
  template:'<span>{{message}}</span>'
})

## scope 作用域
* 在父级组件中，必须存在具有特殊属性scope以声明域的<template>元素，这是表示该元素是作用域插槽的模板，而scope的值对应一个临时变量名，用以接收子组件传过来的props对象
  <div>
    <child>
      <template scope="props">
        <span>hello from parent</span>
        <span>{{props.text}}</span>
      </template>
    </child>
  </div>

## sync 字符修饰符
* 当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定的值。
是一个会被扩展为一个自动更新父组件属性的 v-on 侦听器。
如<comp :foo.sync="bar"></comp>会被拓展为：
<comp :foo="bar" @update:foo="val => bar = val"></comp>
当子组件需要更新 foo 的值时，它需要显式地触发一个更新事件：this.$emit(‘update:foo‘, newValue)

## is 用于动态组件并且给予DOM内模板到限制来工作
*  动态组件：
通过使用保留的 <component> 元素，动态地绑定到它的 is 特性，我们让多个组件可以使用同一个挂载点，并动态切换：
var vm = new Vue({
  el: ‘#example‘,
  data: {
    currentView: ‘home‘
  },
  components: {
    home: { /* ... */ },
    posts: { /* ... */ },
    archive: { /* ... */ }
  }
})
<component v-bind:is="currentView">
  <!-- 组件在 vm.currentview 变化时改变！ -->
</component>

## router-link (vue-router)
* 组件，通过to属性指定目标地址，默认渲染为带有正确链接的<a>标签，并且无点击事件，通过tag则能将<router-link>渲染为tag指定的标签：
  <router-link to="/foo" tag="li">foo</router-link>

