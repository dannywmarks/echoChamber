import { LOAD_VIDEOS } from '../constants/actionTypes'

export const loadVideos = (data) => (dispatch) => {
  dispatch({
    type: LOAD_VIDEOS,
    payload: [...data]
  })
}

