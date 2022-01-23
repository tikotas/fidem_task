import { applyMiddleware, createStore } from "redux";
import { usersReducer }                 from "../reducers/usersReducer";
import { composeWithDevTools }          from "redux-devtools-extension";
import thunk                            from "redux-thunk"


export const store = createStore(usersReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


