import { combineReducers } from 'redux';
import echos from './echos'
import alert from './alert'
import auth from './auth'
import youtube from './youtube'


export default combineReducers({ echos, alert, auth, youtube });