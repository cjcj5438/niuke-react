import React, {Component} from 'react';
// import logo from './logo.svg';
import { Button } from 'antd-mobile';
// import 'antd-mobile/dist/antd-mobile.css'
import './App.css';

// import {createStore} from "redux";

class App extends Component {
    render() {
        const boss = 'liyunlong'
        return (<div>
            <h2>独立团{boss}</h2>
            <Yi y='zhangdamiao'/>
            <Yii yii='xxxxxx'/>
        </div>)
    }
}

// 使用class的方法来使用
class Yi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            solders: ["sss", "ttt", "qqqq "]
        }
    }

    addsolder = () => {
        // console.log(`add solders`);
        this.setState({
            solders: [...this.state.solders, `xxx${Math.random() * 100}`]
        })
    }

    render() {
        // const boss = 'xxxx'
        return (
            <div>
                <h2>Yi.{this.props.y}</h2>
                <Button type="primary" onClick={this.addsolder}>新兵入伍</Button>
                <ul>
                    {this.state.solders.map((v, k) => {
                        return <li key={k}>{v}</li>
                    })}
                </ul>
            </div>
        )
    }
}

// 使用 函数的方法来使用
function Yii(props) {
    return <h2>Yii.{props.yii}</h2>
}


export default App;
