## 核心

### state
* methods(方法集合) :
* computed(计算属性) : 与methods类似，但不同的是methods的方法每次调用都会重新执行，而computed则是有缓存存在，在执行一次后下一次调研则立即返回缓存的值

* 单一状态树　而在vue中获取vuex
  **　在computed中直接返回某个状态： return store.state.count
* 因为是响应式的，所以在每次store.state.count发生改变时都会重新求取computed并更新关联的DOM
* mapState　获取多个状态时的辅助函数

### Getters
* 在store中定义，可以看作vuex的计算属性,getters的返回值会根据依赖缓存起来
* getters接受state为第一参数，其他getters为第二参数,如此在任何组件都可以很方便的使用它　return this.$store.getters.doneTodosCount
* mapGetters 将store中的getters混入局部(如computed对象)时使用的辅助函数

### Mutations 
* 用来变更状态，类似于事件对象，是同步事务，每个mutation都 = 时间类型(type) + 回调函数(handler)　
* 使用时是通过type来调用handler
* 接受state为第一参数，可接受载荷(payload)为第二参数，payload是一个对象
* matations需初始化所有属性
* 在对象添加新属性时，使用Vue.set(obj,'newProp',123)
  或以新对象替换老对象state.obj = {...state.obj,newProp:123}
* 以常量替代mutation事件类型 mutations:{[SOME_MUTATION](state){}}
* 提交：thuis.$store.commit('xxx')
或使用mapMutations辅助函数在methods中调用

### Actions 
* action类似于mutation，但是不直接变更状态，而是提交muatation，是异步的
* action函数接受与store实例具有相同方法和属性的context对象，但是context对象不是store实例本身
* dispatch用来分发提交action: store.dispatch('increment')
* 可使用载荷分发，也可使用对象分发
* 在组件中，使用this.$store.dispatch('xxx')分发
或使用mapActions辅助函数将组件的methods映射为store.dispatch
* store.dispatch可以处理被触发的action的回调函数返回的promise,并且store.dispatch返回的依旧是promise

### modules
* 对于比较大的store，可分割为多个模块
* 模块接收局部状态对象state为第一参数
* 模块内部的action，局部状态通过context暴露出来，而根节点状态为context.rootState
* 模块内部的getter，根节点状态作为第三参数暴露出来
* 命名空间：namespaced:true，模块内部的action、mutation和getter是注册在全局命名空间的，使用了namespaced:true则可以通过路径命名使模块局部化
* 如果在局部模块使用全局state或getter，则将rootState和rootGetter作为第三参数和第四参数传入getter
* 可将路径作为路径上传给mapState、mapGetters、mapActions、mapMutations
* 在store创建后使用store.registerModule来注册模块

