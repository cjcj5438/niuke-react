import React from 'react'
import Logo from "../../component/logo/logo";
import {connect} from "react-redux";
import {Button, InputItem, List, WhiteSpace, WingBlank} from "antd-mobile";
import {login} from "../../redux/user.redux";
import {Redirect} from "react-router-dom";
@connect(
    state=>state.user,{login}
)
class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            user:'',pwd:' '
        }
        this.register=this.register.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
    }
    register(){
        this.props.history.push('/register')
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    handleLogin(){
        this.props.login(this.state)
    }
    render() {
        return (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
              <Logo/>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >user</InputItem>
                        <InputItem
                            onChange={v=>this.handleChange('pwd',v)}
                        >pwd</InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button onClick={this.handleLogin} type='primary'>login</Button>
                    <WhiteSpace/>
                    <Button onClick={this.register} type='primary'>register</Button>
                </WingBlank>
             </div>
        )
    }
}
export default Login;
