import { combineReducers } from 'redux'
import { recommend as recommendAction } from '@/pages/discover/c-pages/recommond/store'

export default combineReducers({
  recommend: recommendAction
})