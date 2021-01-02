import {
  FETCH_ALL_ECHOS,
  CREATE_ECHO,
  UPDATE_ECHO,
  DELETE_ECHO,
} from "../constants/actionTypes";
import * as api from "../api";

//Action Creators
export const getEchos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEchos();
    dispatch({ type: FETCH_ALL_ECHOS, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

//Get echos id
export const getEchosId = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchEchosId(id);
    dispatch({ type: FETCH_ALL_ECHOS, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createEcho = (id,echo) => async (dispatch) => {
  try {
    const { data } = await api.createEcho(id, echo);
    console.log("loaded");
    dispatch({ type: CREATE_ECHO, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateEcho = (id, echo) => async (dispatch) => {
  try {
    const { data } = await api.updateEcho(id, echo);
    dispatch({ type: UPDATE_ECHO, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteEcho = (id) => async (dispatch) => {
  try {
    await api.deleteEcho(id);
    dispatch({ type: DELETE_ECHO, payload: id });
  } catch (err) {
    console.log(err);
  }
};
