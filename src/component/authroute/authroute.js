import React, {Component} from 'react'
import axios from "axios";
import {withRouter} from "react-router-dom";
import {loadData} from '../../redux/user.redux'
import {connect} from "react-redux";

@withRouter
@connect(null,{loadData})
class AuthRoute extends Component {
    componentDidMount() {
        const publicList = ['/login', 'register'];
        const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname) > -1) {
            // 如果已经找到那么不执行下面的
            return null
        }
        axios.get('/user/info').then((res)=>{
            if(res.status===200){
                if(res.data.code===0){
                    this.props.loadData(res.data.data)
                }else{
                    // 这是普通组件。是没有路由信息的。怎么解决呢？withRouter
                    // console.log(this.props.history);
                    this.props.history.push('/login')
                }
                console.log(res.data);
            }
        })
        // 是否登 录
        // 现在的url 地址， login 是不是需要调砖
        // 用户的type 身份boss 还是牛人
        // 用户是否完善信息
    }

    render() {
        return null
    }
}

export default AuthRoute;
