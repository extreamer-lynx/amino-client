import React, {PropsWithChildren} from "react";
import {CommunityItem} from "@/components/CommunityItem";
import {connect} from "react-redux";

interface appRedux {
    loading: Boolean,
    community: []
}

const NavBar = ({community}: PropsWithChildren<appRedux>) => {
    return (
        <React.Fragment>
            {community.length > 0 ? community.map((item: {
                latestActivityTime: string;
                name: string, ndcId: number, icon: string }) => {
                return <CommunityItem key={item.name} icon={item.icon} name={item.name} ndcId={item.ndcId}/>
            }) : <p className={"alert"}>Нету</p>}
        </React.Fragment>
    )
}
const mapCommunity = (state: {
    community: any;
    app: { isLoading: Boolean; error: string, community: any };
}) => ({
    loading: state.app.isLoading,
    community: state.community.list
})

export default connect(mapCommunity)(NavBar)
