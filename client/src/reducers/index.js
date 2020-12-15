import { combineReducers } from 'redux';
import chambers from './chambers'
import alert from './alert'
import auth from './auth'
import youtube from './youtube'


export default combineReducers({ chambers, alert, auth, youtube });