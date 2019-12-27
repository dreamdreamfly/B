# 步骤
- 1 初始化npm init -y
- 2安装：npm install express -s 通过packjson.js可以查看是否安装
- 3引包
```
const express =require('express')
const app =express()
app.get('/login')
app.listen(80)
```
```
/*
1 初始化npm init -y
2安装：npm install express -s 通过packjson.js可以查看是否安装
3引包
*/
const express =require('express')
const app2 =express()
const fs =require('fs')//读取文件模块
const bp =require('body-parser')//post方式需要引入
/*
  中间件：
  功能增强
*/
app2.use(bp.urlencoded({extended:false}))//post方式需要使用中间件
app2.use(express.static('hp'))//设置静态文件路径

/*
req,res 都是二次封装的对象
req.query才是url参数且是对象
*/


app2.get('/login',function(req,res){
    console.log(req.query);//这是我们需要的请求参数字段
    if(req.query.name==='1'){
        // res.json({
        //     code:0,
        //     msg:'成功'
        // })
        res.send({
            code:1,
            msg:'成功'
        })
    }})
// post方式需要用中间件body-parser 直接引入即可
app2.post('/register',(req,res)=>{
  console.log(req.body);//这是我们需要的请求参数字段
  res.send({
      code:1,
      msg:'cg'
  })
})
//找不到的处理（404）
app2.use('*',(req,res)=>{
   let a = fs.readFileSync('./hp/404.html')//引入读取模块
   res.send(a.toString())
})


app2.listen(90)
```
- express-session模块(本地设置cookie)
需要安装express-session npm i express-session -s
引入 const session=require('express-session')
```
app.use(session({
    secret: '12期',//可以随便设置
    name: 'session_id',//本地的cookie的名字
    cookie: {maxAge: 10000},//过期时间
    resave: false,
    saveUninitialized: true,
    rolling:true //刷新cookie重置时间
}))

 req.session.userinfo = user; //设置
 req.session.userinfo//获取
```
