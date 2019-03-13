const express = require('express')
const userRouter=require('./user')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const app = express()
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)

app.get('/', (req, res) => {
    res.send('<h1>chenjing</h1>')
})

app.listen(9093, function () {
    console.log('at port 9093')
})
// 基础使用 类似于mysql 的表。mongo里面的文档。表的概念
// const User = mongoose.model('user', new mongoose.Schema({
//     user: {type: String, require: true},
//     age: {type: Number, require: true},
// }))
// 插入数据
// User.create({user:'小明',age:20},function (err,doc) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(doc);
//     }
// })

// 查数据
// app.get('/data', (req, res) => {
//     User.findOne({}, function (err, doc) {
//         return res.json(doc)
//     })
//     // res.json({name:'chenjing',type:'it'})
// })
// 改数据
// User.update({"user": 'xiaoming'}, {'$set': {age: 26}}, function (err, doc) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(doc);
//     }
// })
// 删数据
// app.get('/delete', (req, res) => {

// })

