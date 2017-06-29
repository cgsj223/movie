import * as db from './db.js'


export default class Comment{
  constructor(content,time,uid,mid){
    this.content=content;
    this.time=time;
    this.uid=uid;
    this.mid=mid;
  }

  save(){
    return new Promise((resolve,reject)=>{
      db.query('INSERT INTO comments (content, time, uid, mid) VALUES (?,?,?,?);',[
        this.content,
        this.time,
        this.uid,
        this.mid
      ])
      .then(rows=>{
        resolve(rows)
      })
      .catch(err=>{
        reject(err)
      })
    })
  }

  static getByMidLimit(mid,index,pageSize){
    return new Promise((resolve,reject)=>{
      db.query(`SELECT comments.content,comments.time,users.username FROM comments
                INNER JOIN users
                ON comments.uid=users.id AND comments.mid=?
                ORDER BY comments.id DESC
                LIMIT ?,?;`,[mid,index,pageSize])
      .then(rows=>{
        resolve(rows)
      })
      .catch(err=>{
        reject(err)
      })
    })
  }

  static getTotalCount(mid){
    return new Promise((resolve,reject)=>{
      db.query('SELECT COUNT(*) AS count FROM comments WHERE mid= ? ;',[mid])
      .then(rows=>{
       resolve(rows[0])
    }).catch(err=>{
      reject(err);
    })
  })
  }

}
