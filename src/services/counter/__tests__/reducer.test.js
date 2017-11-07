import counterReducer from '../reducer'
import { increment } from '../actions'

describe('Reducer: counter', () => {
  it('should return unmodified counter if unknown action type', () => {
    expect(counterReducer(123, {})).toEqual(123)
  })
  it('should return incremented counter with INCREMENT action', () => {
    expect(counterReducer(123, increment())).toEqual(124)
  })
})
