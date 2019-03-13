const express = require('express')
const Router = express.Router()
const utils = require('utility')
const models = require('./model')
const User = models.getModel('user')
const _filter={'':0,'__v':0}
// 用户列表
Router.get('/list', (req, res) => {
    User.find({}, function (err, doc) {
        return res.json(doc)
    })
})
// 登录
Router.post('/login', function (req, res) {
    const {user, pwd} = req.body
    // 第二个参数pwd 设置成零是不允许显示
    User.findOne({user, pwd: md5pwd(pwd)},_filter, (err, doc) => {
        if (!doc) {
            return res.json({code: 1, msg: '用户名或密码错误'})
        }
        res.cookie('userid', doc._id)
        return res.json({code: 0, data: doc})
    })
})
// 注册
Router.post('/register', function (req, res) {
    const {user, pwd, type} = req.body
    User.findOne({user}, (err, doc) => {
        if (doc) {
            return res.json({code: 1, msg: '用户名重复'})
        }
        /*这里不使用create 是因为拿不到创建时的id 换成save*/
        const userModel=new User({user, type, pwd: md5pwd(pwd)})
        userModel.save((err,doc)=>{
            if (err) {
                return res.json({code: 1, msg: '后端出错了'})
            }
            const {user,type,_id}=doc
            res.cookie('userid',_id)
            return res.json({code: 0,data:{user,type,_id}})
        })
        // User.create({user, type, pwd: md5pwd(pwd)},_filter, function (err, doc) {
        //     if (err) {
 
        //         return res.json({code: 1, msg: '后端出错了'})
        //     }
        //     // 这里注册完了要写到cookie里面等操作
        //     return res.json({code: 0})
        // })
    })
})
Router.get('/info', (req, res) => {
    // User.remove({}, function (err, doc) {
    //     return res.json(doc)
    // })
    const {userid} = req.cookies
    if (!userid) return res.json({code: 1})
    // 这里要做cookie 信息  测试code-0 登录 code-1 没有登录
    User.findOne({_id: userid}, function (err, doc) {
        if (err) {
            return res.json({code: 1, msg: '后端出错了'})
        }
        if (doc) {
            return res.json({code: 0, data: doc})
        }

    })
})

function md5pwd(pwd) {
    const salt = '随机xxxxxx'
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router
