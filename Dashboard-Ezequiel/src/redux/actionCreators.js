import { createActions } from 'reduxsauce'

export const {
  Types,
  Creators
} = createActions({
  getPersonRequest: null,
  getPersonSuccess: ['person'],
  getPersonFailure: null
})
export default Creators
