import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS, CLEAR } from './types'

const flowers = (state = [], action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return state
    case FETCH_SUCCESS:
      return [...state, ...action.payload]
    case FETCH_ERROR:
      console.error('FETCH_ERROR')
      return state
    case CLEAR:
      return []
    default:
      return state
  }
}
export default flowers
