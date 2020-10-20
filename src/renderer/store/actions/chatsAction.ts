import {HIDE_CHATS_LOADING, SET_CHATS, SHOW_CHATS_LOADING, UPDATE_CHATS} from "@/store/types";
import AminoClient from "aminoclient";
import {IAminoThread} from "aminoclient/dist/AminoTypes";


export function initChats(ndcId: number, name:string){
    return async (dispatch: (arg0: any) => void) => {
        dispatch(showLoad())
        const chats = await AminoClient.getJoinedChats(ndcId, 0, 100)
        dispatch(setChats(chats ,name, ndcId))
        dispatch(hideLoad())
        //dispatch(updateChats(ndcId))
    }
}

function setChats(chats:IAminoThread[], name: string, ndcId:number){
    return {type: SET_CHATS, chats, name, ndcId}
}

function showLoad() {
    return{
        type: SHOW_CHATS_LOADING
    }
}

function hideLoad() {
    return{
        type: HIDE_CHATS_LOADING
    }
}
function updateChats (ndcId:number) {
    return async (dispatch: (arg0: { type: string; chats: IAminoThread[]; }) => void) => {
        setInterval(async () => {
            const chats = await AminoClient.getJoinedChats(ndcId, 0, 100)
            dispatch({type: UPDATE_CHATS, chats})
        }, 4000)
    }

}
