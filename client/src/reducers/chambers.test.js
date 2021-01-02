import {
  FETCH_ALL,
  FETCH_BY_ID,
  CREATE,
  UPDATE,
  DELETE,
  LIKE
} from "../constants/actionTypes";
import chambersReducer from './chambers'

describe('Chambers Reducer', () => {
  it('Should return default state', () => {
    const newState = chambersReducer(undefined, {});
    expect(newState).toEqual([])
  })
})