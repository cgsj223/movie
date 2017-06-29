import update_data from './update_data.js'
import request from 'request'
import schedule from 'node-schedule'
import express from 'express'
import config from './config.js'
import router from './router.js'
import bodyParser from 'body-parser'
import session from 'express-session'

//每天1点1分1秒更新数据
schedule.scheduleJob('1 1 1 * * *',function(){
  request(update_data.req,update_data.handler)
})
//


let app=express()

app.listen(config.port,config.host,()=>{
  console.log('server is running');
})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret:config.secret,
  resave:false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(router)


app.use(express.static('./dist'))
app.use(express.static('./dist/static'))
