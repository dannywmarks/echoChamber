import { combineReducers } from 'redux';
import echos from './echos'
import alert from './alert'
import auth from './auth'


export default combineReducers({ echos, alert, auth });