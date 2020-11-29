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