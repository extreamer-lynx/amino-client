import {
    HIDE_CHAT_LOADING,
    HIDE_MESSAGE_LOADING, RENEW_CHAT,
    SET_CHAT,
    SHOW_CHAT_LOADING,
    SHOW_MESSAGE_LOADING
} from "@/store/types";
import AminoClient from "aminoclient";

export function initChat(ndcId: number, threadId: string, title: string) {
    return async (dispatch: (arg0: { type: string; chat?: any; title?: string; ndcId?: number, threadId?: string }) => void) => {
        dispatch(showLoad())
        const chat = await AminoClient.getThreadMessages(ndcId, threadId, 0, 50)
        dispatch(setChat(chat, title, ndcId, threadId))
        dispatch(hideLoad())
        // @ts-ignore
        //dispatch(update(ndcId, threadId))
    }
}

function setChat(chat: any, title: string, ndcId: number, threadId: string) {
    return {type: SET_CHAT, chat, title, ndcId, threadId}
}

function showLoad() {
    return {
        type: SHOW_CHAT_LOADING
    }
}

function hideLoad() {
    return {
        type: HIDE_CHAT_LOADING
    }
}

function renewChat(chat: any) {
    return {type: RENEW_CHAT, chat}
}

export function sendMessage(ndcId: number, threadId: string, content: string) {
    return async (dispatch: (arg0: { type: string; }) => void) => {
        dispatch(showMessageLoad())
        await AminoClient.sendMessageInThread(ndcId, threadId, content)
        const chat = await AminoClient.getThreadMessages(ndcId, threadId, 0, 50)
        dispatch(renewChat(chat))
        dispatch(hideMessageLoad())
    }
}

export function updateChats(ndcId: number, threadId: string) {
    return async (dispatch: (arg0: { type: string; chat: any; }) => void) => {
        setInterval(async () => {
            const chat = await AminoClient.getThreadMessages(ndcId, threadId, 0, 50);
            dispatch(renewChat(chat));
        }, 3000)
    }
}


function showMessageLoad() {
    return {
        type: SHOW_MESSAGE_LOADING
    }
}

function hideMessageLoad() {
    return {
        type: HIDE_MESSAGE_LOADING
    }
}
