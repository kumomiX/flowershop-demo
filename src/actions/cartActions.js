import {
  ADD_TO_CART,
  CHANGE_QUANTITY,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  CLEAR_CART
} from 'reducers/types'

const addToCart = payload => ({
  type: ADD_TO_CART,
  payload
})

const changeQuantity = payload => ({
  type: CHANGE_QUANTITY,
  payload
})

const addQuantity = payload => ({
  type: ADD_QUANTITY,
  payload
})

export const clearCart = () => ({
  type: CLEAR_CART
})

export const removeFromCart = payload => ({
  type: REMOVE_FROM_CART,
  payload
})

const addToCartWithRedux = (product, quantity) => dispatch => {
  const obj = {
    product,
    quantity: Number(quantity)
  }
  return dispatch(addToCart(obj))
}

export const addQuantityWithRedux = (index, quantity) => dispatch => {
  const obj = {
    index,
    quantity: Number(quantity)
  }
  return dispatch(addQuantity(obj))
}

export const changeQuantityWithRedux = (index, quantity) => dispatch => {
  const obj = {
    index,
    quantity: Number(quantity)
  }
  return dispatch(changeQuantity(obj))
}

export default addToCartWithRedux
