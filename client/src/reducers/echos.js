import {
  FETCH_ALL_ECHOS,
  CREATE_ECHO,
  UPDATE_ECHO,
  DELETE_ECHO,
} from "../constants/actionTypes";

export default (echos = [], action) => {
  switch (action.type) {
    case CREATE_ECHO:
      return [...echos, action.payload];
    case FETCH_ALL_ECHOS:
      return action.payload;
    case UPDATE_ECHO:
      //action.payload is newly updated post
      return echos.map((echo) =>
        echo._id === action.payload._id ? action.payload : echo
      );
    case DELETE_ECHO:
      return echos.filter((echo) => echo._id !== action.payload);

    default:
      return echos;
  }
};