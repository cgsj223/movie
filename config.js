import {join} from 'path'

export default {
  port:'5555',
  host:'127.0.0.1',
  viewPath:join(__dirname,'dist'),
  secret:'atom',
  database:'myMovie'
}
