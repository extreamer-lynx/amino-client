import {SHOW_LOAD, HIDE_LOAD, SET_ERROR, CLEAR_ERROR} from "@/store/types";

export function appReducer(store = {isLoading : false}, action: any) {
    switch (action.type) {
        case SHOW_LOAD:
            return {...store, isLoading: true}
        case HIDE_LOAD:
            return {...store, isLoading: false}
        case SET_ERROR:
            return {...store, error: action.error}
        case CLEAR_ERROR:
            return {...store, error: null}
        default: return store
    }
}
