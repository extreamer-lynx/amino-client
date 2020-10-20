import {SET_COMMUNITY} from "@/store/types";
import {hideLoading, showLoading} from "@/store/actions/appActions";

export function getCommunity(amino:any){
    return async (dispatch: (arg0: { type: string; community?: any}) => void) => {
        dispatch(showLoading())
        const res = await amino.getJoinedCommunities(0, 30)
        dispatch({type: SET_COMMUNITY, community : res.communityList})
        dispatch(hideLoading())
    }
}
