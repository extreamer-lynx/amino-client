import {createBrowserHistory} from 'history'
import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {accountReducer} from "@/store/reducers/accountReducer";
import {communityReducer} from "@/store/reducers/communityReducer";
import {chatsReducer} from "@/store/reducers/chatsReducer";
import {chatReducer} from "@/store/reducers/chatReducer";
import thunk from "redux-thunk";

const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    account: accountReducer,
    community: communityReducer,
    chats: chatsReducer,
    chat: chatReducer
})

export const history = createBrowserHistory()

// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;


const store = createStore(
    createRootReducer(history), // root reducer with router state
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            thunk
        ),
    ),
)

export default store

