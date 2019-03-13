const mongoose = require('mongoose')
// 连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017/chenjing'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('连接数据成功')
})

const models={
    user:{
        'user':{type:String,require:true},
        'pwd':{type:String,require: true},
        'type':{type:String,require:true},
        'avatar':{type:String},// 头像
        'desc':{type:String},//简介
        'title':{type:String},//职位
        // 如果是boss还有2个字段
        'company':{type:String},//公司
        'money':{type:String},//薪资
    },
    // 聊天
    chat:{}
}

for(let m in models){
    // 所有的key 建立成 表
    mongoose.model(m,new mongoose.Schema(models[m]))
}
module.exports={
    getModel:function (name) {
        return mongoose.model(name)
    }
}
