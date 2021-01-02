import {
  CLEAR_PROFILE,
  GET_PROFILE,
  GET_PROFILES,
  GET_USERS_CHAMBERS,
  PROFILE_ERROR,
  UPDATE_PROFILE,
} from "../constants/actionTypes";
import profileReducer from './profile'

const initialState = {
  profile: null,
  profiles: [],
  chambers: [],
  loading: true,
  error: {},
};

describe('profile Reducer', () => {
  it('Should return default state', () => {
    const newState = profileReducer(undefined, {});
    expect(newState).toEqual(initialState)
  })
})