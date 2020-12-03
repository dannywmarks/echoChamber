import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes'

export default (echos = [], action) => {
  switch(action.type) {
    case CREATE:
      return [...echos, action.payload]
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
    case LIKE:
      //action.payload is newly updated post
      return echos.map((echo) => echo._id === action.payload._id ? action.payload : echo)
    case DELETE:
      return echos.filter((echo) => echo._id !== action.payload);
      
    default:
      return echos;
  }
} 