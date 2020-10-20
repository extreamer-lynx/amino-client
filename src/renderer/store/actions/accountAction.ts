import {CHANGE_LOGIN, SET_PROFILE} from "@/store/types";
import AminoClient from "aminoclient";
import {Requireable} from "react";
import {hideLoading, setError, showLoading} from "@/store/actions/appActions";
import {ThunkAction} from "redux-thunk";
import {getCommunity} from "@/store/actions/communityAction";
import {string} from "prop-types";

export function login(login: Requireable<string>, password: Requireable<string>, deviceId: Requireable<string>): ThunkAction<any, any, any, any>{
    return async (dispatch) => {
        try {
            dispatch(showLoading())
            const profile = await AminoClient.login(login.toString(), password.toString(), deviceId.toString())
            dispatch(setProfile(profile))
            dispatch(hideLoading())
            dispatch(authorized(AminoClient))
            await dispatch(getCommunity(AminoClient))
        }
        catch (e) {
            dispatch(setError(e.message))
            dispatch(hideLoading())
        }
    }
}


export function authorized(amino:any) {
    return {
        type: CHANGE_LOGIN,
        amino
    }
}

function setProfile(profile:any) {
    return {
        type: SET_PROFILE,
        profile
    }
}
