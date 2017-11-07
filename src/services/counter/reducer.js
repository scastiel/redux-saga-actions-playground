import { handleActions } from 'redux-actions'
import { increment } from './actions'

const defaultState = 0

export default handleActions(
  {
    [increment]: counter => counter + 1
  },
  defaultState
)
