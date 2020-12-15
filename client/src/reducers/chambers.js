import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE} from '../constants/actionTypes'

export default (chambers = [], action) => {
  switch(action.type) {
    case CREATE:
      return [...chambers, action.payload]
    case FETCH_ALL:
      return action.payload;
    case UPDATE:
    case LIKE:
      //action.payload is newly updated post
      return chambers.map((chamber) => chamber._id === action.payload._id ? action.payload : chamber)
    case DELETE:
      return chambers.filter((chamber) => chamber._id !== action.payload);
      
    default:
      return chambers;
  }
} 