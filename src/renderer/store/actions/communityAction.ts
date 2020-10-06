import {SET_COMMUNITY} from "@/store/types";

export function getCommunity(community: any){
    return{type: SET_COMMUNITY, community}
}
