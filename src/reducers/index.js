import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

// combine all the reducers into 1 reducer, which is used in createStore()
export default combineReducers({
  todos,
  visibilityFilter
})
