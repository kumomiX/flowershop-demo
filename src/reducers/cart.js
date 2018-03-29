import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  ADD_QUANTITY,
  CHANGE_QUANTITY
} from './types'

const cart = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      return state.filter(x => x.product.id !== action.payload)
    case CLEAR_CART:
      return []
    case CHANGE_QUANTITY:
      const changedState = [...state]
      changedState[action.payload.index].quantity = action.payload.quantity
      return changedState
    case ADD_QUANTITY:
      const newArr = [...state]
      newArr[action.payload.index].quantity =
        newArr[action.payload.index].quantity + action.payload.quantity
      return newArr
    default:
      return state
  }
}
export default cart
