import * as db from './db'

export default class User{
  constructor(username,password,phone,email){
    this.username=username;
    this.password=password;
    this.phone=phone;
    this.email=email;
  }

  save(){
    return new Promise((resolve,reject)=>{
      db.query('INSERT INTO users (username,password,phone,email) VALUES (?,?,?,?);',[
        this.username,
        this.password,
        this.phone,
        this.email
      ])
      .then(rows=>{
        resolve(rows)
      })
      .catch(err=>{
        reject(err)
      })
    })
  }

  static getByUsername(username){
    return new Promise((resolve,reject)=>{
      db.query('SELECT * FROM users WHERE username=?;',[username])
      .then(rows=>{
        resolve(rows[0])
      })
      .catch(err=>{
        reject(err)
      })
    })
  }


}
