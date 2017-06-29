import path from 'path'
import Movie from '../model/movie.js'


export function showMovie(req,res,next){
  res.sendFile('movie.html',{
    root:path.resolve(__dirname,'../dist/')
  })
}


export function sendData(req,res){
  let id=req.query.mid
  let movie=new Movie
  movie.getById(id).then(row=>{
    res.send(row)
  }).catch(err=>{
    res.redirect('back')
  })
}
