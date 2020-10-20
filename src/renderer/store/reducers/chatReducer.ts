import {
    HIDE_CHAT_LOADING,
    HIDE_MESSAGE_LOADING, RENEW_CHAT,
    SET_CHAT,
    SHOW_CHAT_LOADING,
    SHOW_MESSAGE_LOADING
} from "@/store/types";
import {string} from "prop-types";

export function chatReducer(store:{isLoading:Boolean, list: any[], title:string, ndcId:number, threadId:string, isMessageLoading:boolean} = { isLoading: false, list: [], title: "", ndcId: 0, isMessageLoading: false, threadId:""}, action: any)
{
    switch (action.type){
        case SET_CHAT:
            return {...store, list: action.chat, title: action.title, ndcId:action.ndcId, threadId:action.threadId}
        case SHOW_CHAT_LOADING:
            return {...store, isLoading: true}
        case HIDE_CHAT_LOADING:
            return {...store, isLoading: false}
        case SHOW_MESSAGE_LOADING:
            return {...store, isMessageLoading: true}
        case HIDE_MESSAGE_LOADING:
            return {...store, isMessageLoading: false}
        case RENEW_CHAT:
            return {...store, chat: action.chat}
        default: return store
    }
}
