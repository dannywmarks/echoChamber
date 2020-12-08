import { LOAD_VIDEOS, SELECT_VIDEO } from '../constants/actionTypes'

export const loadVideos = (data) => (dispatch) => {
  dispatch({
    type: LOAD_VIDEOS,
    payload: data
  })
}

export const selectVideo = (data) => (dispatch) => {
  dispatch({
    type: SELECT_VIDEO,
    payload: data
  })
}

