import { iUsers } from "../../../interfaces";


export enum actionTypes {
  ADD_NEW_USER = "ADD_NEW_USER",
  DELETE_USER  = "DELETE_USER",
  FILTER_USERS = "FILTER_USERS",
}

export const addNewUser = (user: iUsers) => {
  return {type: actionTypes.ADD_NEW_USER, payload: user}
}

export const delUser = (users: iUsers[]) => {
  return {type: actionTypes.DELETE_USER, payload: users}
}