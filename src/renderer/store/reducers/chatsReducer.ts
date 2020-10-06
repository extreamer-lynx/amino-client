import {SET_CHATS} from "@/store/types";

export function chatsReducer(store = {}, action: any)
{
    switch (action.type){
        case SET_CHATS:
            return {...action.chats}
        default: return store
    }
}
