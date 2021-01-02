//importing to allow api.getChambers, apiCreateChambers
import {
  FETCH_ALL,
  FETCH_BY_ID,
  CREATE,
  UPDATE,
  DELETE,
  LIKE
} from "../constants/actionTypes";
import * as api from "../api";

//Action Creators
export const getChambers = () => async (dispatch) => {
  try {
    const { data } = await api.getChambers();
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const getChamber = (id) => async (dispatch) => {
  try {
    console.log(id)
    const { data } = await api.getChamber(id);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createChamber = (chamber) => async (dispatch) => {
  try {
    const { data } = await api.createChamber(chamber);
    dispatch({ type: CREATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updateChamber = (id, chamber) => async (dispatch) => {
  try {
    const { data } = await api.updateChamber(id, chamber);
    dispatch({ type: UPDATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deleteChamber = (id) => async (dispatch) => {
  try {
    await api.deleteChamber(id);
    dispatch({ type: DELETE, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const likeChamber = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeChamber(id);
    dispatch({ type: LIKE, payload: data });
  } catch (err) {
    console.log(err);
  }
};


