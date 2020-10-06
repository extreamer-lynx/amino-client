import {CHANGE_LOGIN} from "@/store/types";

export function accountReducer(store = {Authorization : false}, action: any) {
    switch (action.type) {
        case CHANGE_LOGIN:
            return {...store, Authorization: !store.Authorization}

        default: return store
    }
}
