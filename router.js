import express from 'express'
import * as indexController from './controller/index_control.js'
import * as userController from './controller/user_control.js'
import * as movieController from './controller/movie_control.js'
import * as commentController from './controller/comment_control.js'

const router=express.Router()

router.get('/',indexController.showIndex)
      .get('/index_data',indexController.getData)
      .get('/register',userController.showRegister)
      .post('/register',userController.doRegister)
      .post('/check_username',userController.checkUserName)
      .get('/get_login_state',userController.loginState)
      .post('/login',userController.doLogin)
      .get('/logout',userController.logout)
      .get('/movie',movieController.showMovie)
      .get('/movie_data',movieController.sendData)
      .get('/comment', commentController.getComment)
      .post('/comment',commentController.saveComment)

export default router
