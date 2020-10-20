import {HIDE_COMMUNITY_LOADING, SET_COMMUNITY, SHOW_COMMUNITY_LOADING} from "@/store/types";

export function communityReducer(store:{isLoading:boolean, list:any[]} = {list:[], isLoading:false}, action: any)
{
    switch (action.type){
        case SET_COMMUNITY:
            return {...store ,list: action.community}
        case SHOW_COMMUNITY_LOADING:
            return {...store, isLoading: true}
        case HIDE_COMMUNITY_LOADING:
            return {...store, isLoading: false}
        default: return store
    }
}
