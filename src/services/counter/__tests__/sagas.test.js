import { delay } from 'redux-saga'
import { call, put } from 'redux-saga/effects'
import { incrementAsync } from '../sagas'
import * as actions from '../actions'

describe('Sagas: counter', () => {
  it('should call delay(1000) then dispatch increment action', () => {
    const gen = incrementAsync()
    expect(gen.next().value).toEqual(call(delay, 1000))
    expect(gen.next().value).toEqual(put(actions.increment()))
    expect(gen.next().done).toBe(true)
  })
})
