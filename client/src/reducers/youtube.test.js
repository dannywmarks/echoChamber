import { LOAD_VIDEOS, SELECT_VIDEO } from "../constants/actionTypes";
import youtubeReducer from './youtube'

const initialState = { videos: [], selectedVideo: null }

describe('Youtube Reducer', () => {
  it('Should return default state', () => {
    const newState = youtubeReducer(undefined, {});
    expect(newState).toEqual(initialState)
  })
})