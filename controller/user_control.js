import User from '../model/user.js'
import config from '../config.js'
import { md5 } from 'utility'


export function showRegister(req,res,next){
  if(req.session.user){
    return res.redirect('back')
  }
  req.url='/register.html'
  next()
}

export function checkUserName(req,res){
  User.getByUsername(req.body.user)
  .then(u=>{
    if(!u){
      res.json({
        code:1000
      })
    }else{
      res.json({
        code:1001
      })
    }
  })
  .catch(err=>{
    console.log(err.message)
  })

}


export function doRegister(req,res){
  let username=req.body.username
  let password=md5(`${req.body.password}${config.secret}`)
  let phone=req.body.phone
  let email=req.body.email
  let user=new User(username,password,phone,email)
  user.save().then(rows=>{
    if(rows.affectedRows==0){
      return res.json({
        code:2001,
        msg:'error'
      })
    }
    //用户注册成功，记录用户登录状态
    user.id=rows.insertId
    req.session.user=user
    res.json({
      code:2000,
      msg:'success'
    })
  }).catch(err=>{
    res.json({
      code:2002,
      msg:'err'
    })
    console.log(err);
  })
}

export function loginState(req,res){
  if(req.session.user){
    console.log(req.session.user);
    return res.send({
      user:{
        username:req.session.user.username,
        id:req.session.user.id
      }
    })
  }
  res.send({
    msg:'no user'
  })
}


export function doLogin(req,res,next){
  let username=req.body.username
  let password=req.body.password
  let checkUsername=/^[a-zA-Z0-9_\u4e00-\u9fa5]{4,16}$/.test(username)
  let checkPassword=/^[a-zA-Z0-9]{6,20}$/.test(password)
  if(!(checkUsername&&checkPassword)){
    return res.json({
      code:3002
    })
  }
  User.getByUsername(req.body.username).then(u=>{
    if(!u||(md5(`${password}${config.secret}`)!=u.password)){
      return res.json({
        code:3001
      })
    }
    req.session.user=u
    res.json({
      code:3000
    })
  })
  .catch(err=>{
    res.json({
      code:3003
    })
  })

}

export function logout(req,res){
    req.session.user=null
  res.redirect('/')
}
