import fs from 'fs'
import db from './model/db.js'

function writeLog(info){
  let time=new Date()
  fs.appendFile("./log",info+' '+time.toLocaleString()+"\n" ,function(err){
    if(err){
      console.log(err);
    }
    console.log('更新数据成功');
  })
}

function handleData(data){
  let movie_data=JSON.parse(data)
  let data_arr=movie_data.subjects
  data_arr.forEach((item,index)=>{
    let directors=[]
    let actors=[]
    item.directors.forEach((item,index)=>{
      directors.push(item.name)
    })
    item.casts.forEach((item,index)=>{
      actors.push(item.name)
    })
    db.query("UPDATE movie SET img=?, title=?, director=?, actors=?, year=?, rating=? WHERE id=? ;",[
      item.images.large,
      item.title,
      directors.toString(),
      actors.toString(),
      item.year,
      item.rating.average,
      index+1
    ]).catch((err)=>{
      writeLog(err.message)
    })
  })

}



export default {
  req:{
    method:'GET',
    uri:'https://api.douban.com/v2/movie/top250?count=20',
  },
  handler:function(err,response,body){
    if(!err&&response.statusCode==200){
      handleData(body)
      writeLog('获取成功')
    }else{
      writeLog(err.message)
    }
  }
}
