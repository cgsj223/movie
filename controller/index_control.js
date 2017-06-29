import * as db from '../model/db.js'


export function showIndex(req,res,next){
  req.url='/index.html'
  next()
}

export function getData(req,res){
  let count=parseInt(req.query.count)
  db.query('SELECT * FROM movie LIMIT 0,?;',[count])
  .then(rows=>{
    res.send(rows)
  })
  .catch(err=>{
    res.json({
      code:4001,
      msg:err.message
    })
  })



}
