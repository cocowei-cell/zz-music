import * as actionTypes from './constants'
import { Map } from 'immutable'

const initState = Map({
  banner: []
})

export function recommend(state = initState, action) {
  switch (action.type) {
    case actionTypes.MODIFY_BANNER:
      return state.set("banner", action.value)
    default:
      return state
  }
}