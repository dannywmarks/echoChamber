import { LOAD_VIDEOS, SELECT_VIDEO } from '../constants/actionTypes'

const initialState = { videos: [] , selectedVideo: null }

export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_VIDEOS:
      return {...state, videos: [...payload] }
    case SELECT_VIDEO:
      return {...state, selectedVideo: payload}
    default:
      return state;
  }
}