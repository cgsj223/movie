import * as db from './db.js'

export default class Movie {
  constructor(){

  }
  getById(id){
    return new Promise((resolve,reject)=>{
      db.query('SELECT * FROM movie WHERE id=?;',[id])
      .then(rows=>{
        resolve(rows[0])
      })
      .catch(err=>{
        reject(err)
      })
    })
  }

  initMovie(){
    return new Promise((resolve,reject)=>{
      db.query('SELECT * FROM movie LIMIT 0,20;')
      .then(rows=>{
        resolve(rows)
      })
      .catch(err=>{
        reject(err)
      })
    })
  }

}
