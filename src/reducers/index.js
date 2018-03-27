import { combineReducers } from 'redux'
import flowers from './flowers'
import filter from './filter'

export default combineReducers({
  flowers,
  filter
})
