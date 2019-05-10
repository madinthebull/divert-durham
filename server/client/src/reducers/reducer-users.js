import { CREATE_USER } from '../actions'

const initialState = {}
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        createUser: action.payload.data
      }
    default:
      return state
  }
}

export default usersReducer
