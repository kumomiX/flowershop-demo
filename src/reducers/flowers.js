import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS, CLEAR } from './types'

const initialState = {
  products: [],
  fetched: false
}

const flowers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return state
    case FETCH_SUCCESS:
      return { ...state, products: [...action.payload], fetched: true }
    case FETCH_ERROR:
      console.error(FETCH_ERROR)
      return state
    case CLEAR:
      return initialState
    default:
      return state
  }
}
export default flowers
