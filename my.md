# 脚手架命令：
npm install redux --save  按装第三方redux
npm run eject 弹出配置文件。可以配置webpack
扩展package。json 里面的script 是nmp run 命令的扩展


```
    "react": "^16.0.0",
    "react-dom": "^16.0.0",
    "react-scripts": "1.0.14,
    "redux": "3.7.2"
```
# express使用：
app.get app.post 
app.use 使用模块
res.send res.json res.sendfile 相应不同的内容

# mongo文档模型：
string number 等数据结构
create remove update 增删改
find 返回的数组 和 findOne返回一条对象格式  用来查询数据

# 组件之间传递
使用<组件 数据=‘值’>的形式来传递
组件里面使用 this。props 获取值
如果组件只用render函数，还可以使用函数的形式写组件

# 组件内部state
jsx 本质是js ，所以可以直接使用。map渲染列表
Constructor 设置出事状态。记得执行super（props）
state 是一个不可变的对象，使用this。state 来获取

# 事件
onclick = {this。函数名} 来绑定事件
this引用问题
this.setState 来修改值。来返回新的值 而不是修改state

# redux
 专注于状态管理。和react解耦
 单一状态。单向数据流
 核心：store state action reducer
 理解：老赵有一个保险箱，所以人的状态，都记录在stat里面
 需要改变的时候，需要告诉 专员disptach 要干什么action
 处理变化的人reducer 拿到 state 和action 生成新的state

# 使用react-redux
Provider 组件在应用最外层。传入store 即可，只用一次。 

# react-router4 基础知识
BrowserRouter 包裹整个应用
Router 路由对应渲染的组件。可嵌套
Link 跳转专用 
url 参数可以用冒号标识参数
redirect 组件 跳转
switch 只渲染一个子route组件

# 页面文件结构
骨架结构实现
组件放在component文件
页面放在container文件夹下面
页面入口处获取用户信息，决定跳转到哪个页面

# 开发模式
cookie 用户验证 cookie-parser

6.9
