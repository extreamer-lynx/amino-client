import {
    HIDE_CHATS_LOADING,
    SET_CHATS,
    SHOW_CHATS_LOADING, UPDATE_CHATS
} from "@/store/types";
import {IAminoThread} from "aminoclient/dist/AminoTypes";

export function chatsReducer(store: { isLoading: boolean, list: IAminoThread[], name:string, ndcId: number} = {list: [], isLoading: false, name: "", ndcId: 0}, action: any) {
    switch (action.type) {
        case SET_CHATS:
            return {...store, list: action.chats, name:action.name, ndcId: action.ndcId}
        case SHOW_CHATS_LOADING:
            return {...store, isLoading: true}
        case HIDE_CHATS_LOADING:
            return {...store, isLoading: false}
        case UPDATE_CHATS:
            return {...store, list: [...action.chats]}
        default:
            return store
    }
}
