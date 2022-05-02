import { applyMiddleware, createStore } from 'redux'
import { tableListReducer } from './tableListReducer'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

export const store = createStore(tableListReducer, composeWithDevTools(applyMiddleware(thunk)))