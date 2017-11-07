import { all } from 'redux-saga/effects'
import counter from './services/counter/sagas'

export default function*() {
  yield all([counter()])
}
