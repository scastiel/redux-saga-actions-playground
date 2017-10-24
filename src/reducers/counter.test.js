import counterReducer from './counter'
import { INCREMENT } from '../actions/types'

describe('Reducer: counter', () => {
  it('should return unmodified counter if unknown action type', () => {
    expect(counterReducer(123, { type: 'unknown' })).toEqual(123)
  })
  it('should return incremented counter with INCREMENT action', () => {
    expect(counterReducer(123, { type: INCREMENT })).toEqual(124)
  })
})
