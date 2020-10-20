import {CHANGE_LOGIN, SET_PROFILE} from "@/store/types";

export function accountReducer(store = {Authorization : false, AuthClient:null, Profile: null, uid:""}, action: any) {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {...store, Authorization: !store.Authorization, AuthClient: action.amino}
        case SET_PROFILE:
            return {...store, Profile: action.profile.account, uid: action.profile.account.uid}
        default: return store
    }
}
