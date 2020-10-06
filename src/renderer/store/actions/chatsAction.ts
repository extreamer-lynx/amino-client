import {SET_CHATS} from "@/store/types";

export function getChats(chats: any){
    return{type: SET_CHATS, chats}
}
