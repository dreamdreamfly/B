const express =require('express')
const app=express()
const bp =require('body-parser')
app.use(express.static('www'))
app.use(bp.urlencoded({extended:false}))
let ary =[{
    name:'hyw',
    pw:123
},
{
    name:'ydz',
    pw:321
}]

app.get('/dl',(res,req)=>{
    let {user} = res.query
    let o =ary.find(ele=>ele.name==user)
    let obj ={}  
   if(o){
       obj.code=0
       obj.msg='用户名已存在'
   }else{
    obj.code=1
    obj.msg='用户名可用'
    }
    req.json(obj)})
app.post('/mm',(req,res)=>{
    let obj1 ={}
    let {user,pw}=req.body
    if(/^[a-zA-Z]\w{6,9}$/.test(pw)){
        obj1.code=1
        obj1.msg='恭喜注册成功'
        ary.push({
            name:user,
            pw
        })
    }else{
        obj1.code=0
        obj1.msg='密码等级太低'
    }
    
    res.send(obj1)
    
})


app.listen(80)