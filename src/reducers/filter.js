import {
  SET_FILTER_ERROR,
  SET_FILTER_REQUEST,
  SET_FILTER_SUCCESS,
  CLEAR_FILTER
} from './types'

const filter = (state = '', action) => {
  switch (action.type) {
    case SET_FILTER_REQUEST:
      return state
    case SET_FILTER_SUCCESS:
      return action.payload
    case SET_FILTER_ERROR:
      console.error('SET_FILTER_ERROR')
      return state
    case CLEAR_FILTER:
      return ''
    default:
      return state
  }
}
export default filter
