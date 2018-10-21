import { takeLatest, all, put } from 'redux-saga/effects'
import ActionCreators, { Types } from '../actionCreators'

import { getPerson } from './person'
import Api from '../../service/Api'

export default function * rootSaga () {
  const devURL = 'https://8ex6o98ek9.execute-api.us-west-2.amazonaws.com'
  const prodURL = 'http://api.x.com' // example
  const baseURL = process.env.NODE_ENV === 'development' ? devURL : prodURL
  const api = new Api(baseURL)

  yield all([
    takeLatest(Types.GET_PERSON_REQUEST, getPerson({ api })),

    put(ActionCreators.getPersonRequest())
  ])
}
