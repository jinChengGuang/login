## 请求体的文件类型 
- bodyParser.(content-type)()
- json 
- urlencoded  表单提交的序列
- text
- row  
注：放到合适的地方，不需要走这段逻辑了！他会在req添加一个body  
 app.use(bodyParser.urlencoded({extended:true})); 里面的参数的意思是使用queryString()方法来处理字符串；如果是其他的格式，就不需要填写了；比如json
## forEach
```
user.forEach(function(item){if(item.name == total.name && item.pass ==total.pass){res.redirect('/')}else{res.redirect('/signin'}})
```
注：是不可以的，因为循环不会停止；如果相同跳转到欢迎  但是还会继续执行 会报错
## bootstrap
- 第一层是container
- 第二层是行
- 第三层是列
- 第四次是表单元素
注：表单元素里面的for='username',也input里面的id；代表点击用户名获取焦点；name代表如果是'get':name:value;'post':{name:value}
 在form表单中加入role="form"    是告诉bootstrap角色     不写action='path'的话提交当前路径('/')就是('/')   如果是get 的话，会将序列化，放到app.url里面
```
 <div class="form-group">
                    <label for="process">用户名</label>
                    <input type="text" id="process" name="process">

                </div>
```
## 模板 如果是html
```
app.set('view engine','html');
 app.set('views',path.resolve('views'));
 /*'html',require('ejs').__express)  告诉express 是什么类型，通过什么模板来渲染  里面是一个函数，一个Render()*/
 app.engine('html',require('ejs').__express);
```
## 模板
渲染模板  添加error  success:req.session.stastu