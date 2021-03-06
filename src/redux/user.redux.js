import axios from 'axios'
import {getRedirectPath} from "../util";

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOAD_DATA = 'LOAD_DATA';

const initState = {
    redirectTo: '',
    isAuth: false,
    msg: '',
    user: '',
    pwd: '',
    type: ''
}

// 状态管理
export function user(state = initState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {...state, msg: "", redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        case LOGIN_SUCCESS:
            return {...state, msg: "", redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
        case LOAD_DATA:
            return {...state,...action.payload}
        default:
    }
    return state
}


function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}

function registerSuccess(data) {
    return {type: REGISTER_SUCCESS, payload: data}
}

function loginSuccess(data) {
    return {type: LOGIN_SUCCESS, payload: data}
}
export function loadData(userInfo) {
    return {type:LOAD_DATA,payload:userInfo}
    // 获取用户信息
}

// 事件管理
export function register({user, pwd, Confirm, type}) {
    if (!user || !pwd || !type) {
        return errorMsg("用户名密码必须输入")
    }
    if (pwd !== Confirm) {
        return errorMsg("密码和确认密码不同")
    }
    // 异步的时候需要用dispatch 来触发。不是异步的话直接使用同步写法
    return dispatch => {
        axios.post('/user/register', {user, pwd, type})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(registerSuccess({user, pwd, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }

}

export function login({user, pwd}) {
    if (!user||!pwd) {
        return errorMsg("用户名密码必须输入")
    }
    return dispatch => {
        axios.post('/user/login', {user, pwd})
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(loginSuccess(res.data.data))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}

// // login 相关
// export function login(state={},action) {
//     switch (action.type) {
//         default:
//             return state;
//     }
// }
