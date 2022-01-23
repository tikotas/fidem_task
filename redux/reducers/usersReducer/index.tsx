import { actionTypes } from "../../actions/users";
import { iUsers }      from "../../../interfaces";


interface iAction {
  type: string
  payload?: any
}


const initState: iUsers[] = []


export const usersReducer = (state = initState, action: iAction) => {
  switch (action.type) {
    case actionTypes.ADD_NEW_USER:
      return [...state, action.payload]
    case actionTypes.DELETE_USER:
      return action.payload
    case actionTypes.FILTER_USERS:
      return [action.payload]
    default:
      return state
  }
}