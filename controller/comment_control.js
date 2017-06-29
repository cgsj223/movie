import Comment from '../model/comment.js'

export function getComment(req,res){
  let info=req.query
  let pageSize=parseInt(info.pageSize)
  let index=(parseInt(info.page)-1)*pageSize
  let mid=parseInt(info.mid)
  if(info.count){
    let pro=Promise.all([
      Comment.getByMidLimit(mid,index,pageSize),
      Comment.getTotalCount(mid)
    ]);
    pro.then(data=>{
      res.send({
        comments:data[0],
        count:data[1].count
      })
    })
    .catch(err=>{
      console.log(err.message);
    })
    return 
  }
  Comment.getByMidLimit(mid,index,pageSize)
  .then(rows=>{
    res.send({
      comments:rows
    })
  })
  .catch(err=>{
    console.log(err.message);
  })
}


export function saveComment(req,res){
  let data=req.body
  let content=data.content
  let time=data.time
  let uid=data.uid
  let mid=data.mid
  let comment=new Comment(content,time,uid,mid)
  comment.save().then(rows=>{
    if(rows.affectedRows==1){
      res.json({
        code:5000,
        msg:'success'
      })
    }
  }).catch(err=>{
      res.json({
        code:5001,
        msg:'server error'
      })
    })
}
