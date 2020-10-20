import {CLEAR_ERROR, HIDE_LOAD, SET_ERROR, SHOW_LOAD} from "@/store/types";


export function setError (error: string) {
    return (dispatch: (p: { type: string; error: string }) => void) => {
        dispatch({type: SET_ERROR, error})
        setTimeout(()=> {
            dispatch({type: CLEAR_ERROR, error: ""})
        }, 5000)
    }
}

export function showLoading () {
    return {
        type: SHOW_LOAD
    }
}

export function hideLoading () {
    return {
        type: HIDE_LOAD
    }
}
