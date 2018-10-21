import ActionCreators from '../actionCreators'
import { put, call } from 'redux-saga/effects'

export const getPerson = ({ api }) => function * () {
  const person = yield call(api.getPerson)
  yield put(ActionCreators.getPersonSuccess(person.data))
}
