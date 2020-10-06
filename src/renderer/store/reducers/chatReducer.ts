import {SET_CHAT} from "@/store/types";

export function chatReducer(store = {}, action: any)
{
    switch (action.type){
        case SET_CHAT:
            return {...action.chat}
        default: return store
    }
}
