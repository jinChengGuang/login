var express=require('express');
var path=require('path');
var app=express();
app.set('view engine','ejs');
app.set('views',path.resolve('view'));
app.use(express.static(path.join(__dirname,'public')));
app.b=[];
app.get('/signup',function(req,res){
    res.render('signup',{title:'注册'})
});
app.post('/signup',function(req,res){
    var str='';
    req.on('data',function (data) {
        str+=data;
    });
    req.on('end',function() {
        var obj = {};
        str.replace(/([^&]+)=([^&]+)/g, function () {
            obj[arguments[1]] = arguments[2];
           app.b.push(obj);
    });
        res.redirect('/signin')
    });
});
app.get('/signin',function(req,res){
    res.render('signin',{title:'登陆'})
});
app.post('/signin',function(req,res){
    var str='';
    req.on('data',function (data) {
        str+=data;
    });
    req.on('end',function(){
        var obj={};
        str.replace(/([^&]+)=([^&]+)/g,function () {
            obj[arguments[1]]=arguments[2]
        });
        var flag=app.b.find(function (item) {
            return (item.name==obj.name && item.password==obj.password)
        });
        flag?res.redirect('welcome'):res.redirect('signup')
    })
});
app.get('/welcome',function(req,res){
    res.render('welcome',{title:'欢迎'})
});
app.listen(8080);
