//importing to allow api.getEchos, apiCreateEchos
import * as api from '../api';

//Action Creators
export const getEchos = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEchos();
    dispatch({ type: 'FETCH_ALL', payload: data});
  } catch (err) {
    console.log(err.message)
  }
}

export const createEcho = (echo) => async (dispatch) => {
  try {
    const { data } = await api.createEcho(echo)
    dispatch({ type: 'CREATE', payload: data })
  } catch(err) {
    console.log(err)
  }
}

export const updateEcho = (id, echo) => async (dispatch) => {
  try {
    const { data } = await api.updateEcho(id, echo);
    dispatch({ type: 'UPDATE', payload: data })
  } catch(err) {
    console.log(err)
  }
}

export const deleteEcho = (id) => async (dispatch) => {
  try {
    await api.deleteEcho(id);
    dispatch({ type: 'DELETE', payload: id})
  } catch(err) {
    console.log(err)
  }
}