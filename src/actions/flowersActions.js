import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from 'reducers/types'
import setFilter from 'actions/filterActions'

const fetchFlowersSuccess = payload => ({
  type: FETCH_SUCCESS,
  payload
})

const fetchFlowersReq = () => ({
  type: FETCH_REQUEST
})

const fetchFlowersError = () => ({
  type: FETCH_ERROR
})

const fetchFlowers = () =>
  fetch('https://5ab6b4a7c21b900014ab9a5a.mockapi.io/api/v1/flowers').then(
    response => Promise.all([response, response.json()])
  )

const fetchFlowersWithRedux = () => dispatch => {
  dispatch(fetchFlowersReq())
  return fetchFlowers().then(([response, json]) => {
    if (response.status === 200) {
      setTimeout(() => {
        dispatch(fetchFlowersSuccess(json))
      }, 1000)
      dispatch(setFilter(json[0].color))
    } else {
      dispatch(fetchFlowersError())
    }
  })
}

export default fetchFlowersWithRedux
