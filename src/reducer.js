/*把所有的reducer进行合并*/
import {combineReducers} from "redux";
import {user} from "./redux/user.redux";

export default combineReducers({user})
