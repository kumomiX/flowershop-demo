import { combineReducers } from 'redux'
import flowers from './flowers'
import filter from './filter'
import cart from './cart'

export default combineReducers({
  flowers,
  filter,
  cart
})
