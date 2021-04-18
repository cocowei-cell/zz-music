import { combineReducers } from 'redux-immutable' // 通过redux的immutable可以使得其转换为正常的对象
import { recommend as recommendAction } from '@/pages/discover/c-pages/recommond/store'
const _ = combineReducers({
  recommend: recommendAction
})
export default _