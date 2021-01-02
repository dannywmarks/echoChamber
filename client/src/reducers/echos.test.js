import {
  FETCH_ALL_ECHOS,
  CREATE_ECHO,
  UPDATE_ECHO,
  DELETE_ECHO,
} from "../constants/actionTypes";

import echosReducer from './echos'

describe('echos Reducer', () => {
  it('Should return default state', () => {
    const newState = echosReducer(undefined, {});
    expect(newState).toEqual([])
  })
})