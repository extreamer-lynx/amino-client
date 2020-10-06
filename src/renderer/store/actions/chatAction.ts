import {SET_CHAT} from "@/store/types";

export function getChat(chat: any){
    return{type: SET_CHAT, chat}
}
