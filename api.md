## fetch
* 总结一下，Fetch 优点主要有：
  语法简洁，更加语义化
  基于标准 Promise 实现，支持 async/await
  同构方便，使用 isomorphic-fetch

## async和await
* 只有在async方法里面才能使用await操作符；
  await操作符是针对Task对象的；
  当方法A调用方法B,方法B方法体内又通过await调用方法C时，如果方法C内部有异步操作，则方法B会等待异步操作执行完，才往下执行；但方法A可以继续往下执行，不用再等待B方法执行完。

## jquery的promise
* 传统写法（jQuery1.5.0之前返回XHR对象，不可链式操作）：$.ajax({
  url: '',
  success:  function(){},
  error:  function(){}
})
* 在jQuery1.5.0版本之后返回deffered对象，可链式编程
$.ajax('').done(function(){}).fail(function(){})
done相当于success，fail相当于error，都是回调，也可以接第二个回调
$.ajax('').done(function(){}).fail(function(){}).done(function(){})...
* $.when() 为多个请求指定一个回调
$.when($.ajax(''), $.ajax('')).done(function(){}).fail(function(){}
即先进行两个请求，都成功则执行done，一个或都失败则执行fail
但是$.when()只接受deffered对象，deffered对象可新建
var newDeffered = $.Deffered()
可为某个延时方法指定回调
var dtd = $.Deferred(); // 新建一个deferred对象

　var wait = function(dtd){
　　var tasks = function(){
　　　alert("执行完毕！");
　　　dtd.resolve(); // 改变deferred对象的执行状态
　　};
　　setTimeout(tasks,5000);
　　return dtd;
　};
　$.when(wait(dtd))
　　.done(function(){ alert("哈哈，成功了！"); })
　　.fail(function(){ alert("出错啦！"); });
* deffered对象有三种状态：
  1、已完成(resolve)，此时立即执行done
  2、已失败(reject)，此时立即执行fail
  3、未完成()，此时等待中，或调用progress指定的回调
  上面dtd.resolve()则是手动改写deffered对象状态，同理也存在dtd.reject()

* deffered.promise()方法，即在原来的deffered对象上返回另一个deffered对象，后者开放done()和fail()，屏蔽resolve()和reject()
var wait = function(dtd){
　var dtd = $.Deferred(); //在函数内部，新建一个Deferred对象
　var tasks = function(){
　　alert("执行完毕！");
　　dtd.resolve(); // 改变Deferred对象的执行状态
　};
　setTimeout(tasks,5000);
　return dtd.promise(); // 返回promise对象
};
$.when(wait())
  .done(function(){ alert("哈哈，成功了！"); })
　.fail(function(){ alert("出错啦！"); });
或者直接传入
$.Deferred(wait)
　.done(function(){ alert("哈哈，成功了！"); })
　.fail(function(){ alert("出错啦！"); });

* then() 即将done()和fail()合并在一起的方法
$.when($.ajax(‘’))
  .then(successFunc, failureFunc)
若then只有一个参数，等同于done()



  