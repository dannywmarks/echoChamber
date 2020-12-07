
const initialState = []

export default (state = initialState, action) => {
  const {type, payload} = action
  switch (type) {
    case LOAD_VIDEOS:
      return [...state, payload]
    default:
      return state;
  }
}