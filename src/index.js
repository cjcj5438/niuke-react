import React from 'react'
import ReactDom from 'react-dom'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'

import reducers from './reducer'
import './config'
import Login from "./container/login/login";
import AuthRoute from './component/authroute/authroute'
import register from "./container/register/register";
import './index.css'

let store
if(process.env.NODE_ENV==='production'){
    store = createStore(reducers, compose(applyMiddleware(thunk)))
}else{
    const reduxDevtools =window.__REDUX_DEVTOOLS_EXTENSION__? window.devToolsExtension() :(f) => f
    store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools))
}

// const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : () => {}
// const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools))
// const store = createStore(reducers, compose(applyMiddleware(thunk)))

function Boss() {
    return <h2>BOSS</h2>
}

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <AuthRoute></AuthRoute>
                <Route path="/boss" component={Boss}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={register}></Route>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))
