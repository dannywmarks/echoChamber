import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../constants/actionTypes";
import authReducer from "./auth";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

describe("Auth Reducer", () => {
  it("Should return default state", () => {
    const newState = authReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  it("Should return new state if receiving type USER_LOADED", () => {
    const user = { username: "dannymarks" };
    const state = {
      token: null,
      isAuthenticated: true,
      loading: false,
      user: user,
    };

    const newState = authReducer(undefined, {
      type: USER_LOADED,
      payload: user,
    });
    expect(newState).toEqual(state);
  });
  it("Should return initialState if receiving to LOGOUT", () => {
    const logOutState = {
      isAuthenticated: false,
      loading: false,
      user: null,
      token: null
    }
    const newState = authReducer(undefined, {
      type: LOGOUT,
      payload: initialState,
    });
    console.log(initialState)
    expect(newState).toEqual(logOutState);
  });
});
