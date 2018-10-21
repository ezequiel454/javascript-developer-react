import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
  isLoading: false,
  data: {}
}

export const getPersonRequest = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: true
  }
}

export const getPersonSuccess = (state = INITIAL_STATE, action) => {
  return {
    ...state,
    isLoading: false,
    data: action.person
  }
}

export const getPersonFailure = (state = INITIAL_STATE) => {
  return {
    ...state,
    isLoading: false
  }
}

export const HANDLERS = {
  [Types.GET_PERSON_REQUEST]: getPersonRequest,
  [Types.GET_PERSON_SUCCESS]: getPersonSuccess,
  [Types.GET_PERSON_FAILURE]: getPersonFailure
}

export default createReducer(INITIAL_STATE, HANDLERS)
