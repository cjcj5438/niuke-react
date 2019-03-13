import React, {Component} from 'react'
import Logo from "../../component/logo/logo";
import {InputItem, List, WingBlank, Radio, WhiteSpace, Button} from "antd-mobile";
import {connect} from "react-redux";
import {register} from "../../redux/user.redux";
import {Redirect} from "react-router-dom";

@connect(
    state=>state.user,
    {register}
)
class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            user:'',
            pwd:'',
            Confirm:'',
            type:'genius'//或者boss
        }
        /*这种写法看情况而定 ，这种开销其实是最小的  还会看灵活程度*/
        this.handleRegister=this.handleRegister.bind(this)
    }
    handleChange(key,val){
        this.setState({
            [key]:val
        })
    }
    // handleChange=(e,x)=>{
    //     console.log(e.target)
    //     console.log(x)
    //     console.log(e.target.value)
    // }
    handleRegister(){
        // console.log(this.state);
        this.props.register(this.state)
    }
    render() {
        const RadioItem = Radio.RadioItem;
        // const {getFiledProps}= this.props.form{/*{...getFiledProps()}*/}
        return (
            <div>
                {this.props.redirectTo?<Redirect to={this.props.redirectTo}/>:null}
                <Logo/>
                <WingBlank>
                    <List>
                        {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
                        <InputItem
                            onChange={v=>this.handleChange('user',v)}
                        >用户名</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type='password'
                            onChange={v=>this.handleChange('pwd',v)}
                        >密码</InputItem>
                        <WhiteSpace />
                        <InputItem
                            type='password'
                            onChange={v=>this.handleChange('Confirm',v)}
                        >确认密码</InputItem>
                        <WhiteSpace />
                        <RadioItem
                            checked={this.state.type==='genius'}
                            onChange={()=>this.handleChange('type','genius')}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem
                            checked={this.state.type==='boss'}
                            onChange={()=>this.handleChange('type','boss')}
                        >
                            BOSS
                        </RadioItem>
                        <WhiteSpace />
                        <WhiteSpace/>
                        <Button type='primary' onClick={this.handleRegister}>Register</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default Register;

