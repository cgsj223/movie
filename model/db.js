import mysql from 'mysql'
import fs from 'fs'


const pool=mysql.createPool({
  host:'localhost',
  port:3306,
  user:'cgsj',
  password:'lala223110',
  database:'myMovie'
});


export function query(sql,params=[]){
  return new Promise((resolve,reject)=>{
    pool.getConnection((err,connection)=>{
      if(err){
        return reject(err)
      }
      connection.query(sql,params,(err,rows)=>{
        connection.release()
        if(err){
          console.log(err.message)
          return reject(err)
        }
        resolve(rows)
      })
    })
  })
}
