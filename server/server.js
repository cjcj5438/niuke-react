const express = require('express')
const mongoose = require('mongoose')
// 连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/chenjing'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('连接数据成功')
})
// 基础使用 类似于mysql 的表。mongo里面的文档。表的概念
const User = mongoose.model('user', new mongoose.Schema({
    user: {type: String, require: true},
    age: {type: Number, require: true},
}))
// 插入数据
// User.create({user:'小明',age:20},function (err,doc) {
//     if(err){
//         console.log(err);
//     }else {
//         console.log(doc);
//     }
// })
const app = express()
app.get('/', (req, res) => {
    res.send('<h1>chenjing</h1>')
})
// 查数据
app.get('/data', (req, res) => {
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
    // res.json({name:'chenjing',type:'it'})
})
// 改数据
// User.update({"user": 'xiaoming'}, {'$set': {age: 26}}, function (err, doc) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(doc);
//     }
// })
// 删数据
app.get('/delete', (req, res) => {
    User.remove({age: 20}, function (err, doc) {
        return res.json(doc)
    })
})
app.listen(9093, function () {
    console.log('at port 9093')
})
