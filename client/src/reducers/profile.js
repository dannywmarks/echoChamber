import {
  CLEAR_PROFILE,
  GET_PROFILE,
  GET_PROFILES,
  GET_USERS_CHAMBERS,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "../constants/actionTypes";

const initialState = {
  profile: null,
  profiles: [],
  chambers: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        loading: false,
      };
    case GET_USERS_CHAMBERS:
      return {
        ...state,
        chambers: payload,
        loading: false
      } 
    default:
      return state;
  }
}
