import * as actions from './actions'
import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put(actions.increment())
}

export default function*() {
  yield takeEvery(actions.incrementAsync, incrementAsync)
}
