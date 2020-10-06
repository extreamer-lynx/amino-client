import {SET_COMMUNITY} from "@/store/types";

export function communityReducer(store = {}, action: any)
{
    switch (action.type){
        case SET_COMMUNITY:
            return {...action.community}
        default: return store
    }
}
