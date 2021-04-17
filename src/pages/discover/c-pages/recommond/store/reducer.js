import * as actionTypes from './constants'
const initState = {
  banner: []
}

export function recommend(state = initState, action) {
  switch (action.type) {
    case actionTypes.MODIFY_BANNER:
      return { ...state, banner: action.value }
    default:
      return state
  }
}