const http=require('http');
const express=require('express');
const travel=require('./travel');
var app=express();
http.createServer(app).listen(8008);
//使用中间件向客户端返回静态内容
app.use(express.static('public'));
//定义路由，向客户端返回动态内容


app.get('/travel/del',travel.del);
app.post('/travel/add',travel.add);
app.post('/travel/login',travel.login);
