import {
  SET_FILTER_ERROR,
  SET_FILTER_REQUEST,
  SET_FILTER_SUCCESS
} from 'reducers/types'

const setFilterSuccess = payload => ({
  type: SET_FILTER_SUCCESS,
  payload
})

const setFilterReq = () => ({
  type: SET_FILTER_REQUEST
})

const setFilterError = () => ({
  type: SET_FILTER_ERROR
})

const setFilter = filterStr => dispatch => {
  dispatch(setFilterReq())
  try {
    return dispatch(setFilterSuccess(filterStr))
  } catch (err) {
    return dispatch(setFilterError())
  }
}

export default setFilter
