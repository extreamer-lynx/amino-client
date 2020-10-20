import React, {PropsWithChildren, useState} from "react";
import {number, string} from "prop-types";
import {useDispatch} from "react-redux";
import {initChats} from "@/store/actions/chatsAction";
import ContentLoader from "react-content-loader";
import {ComunityIcon} from "@/components/ComunityIcon";

interface communityItem {
    icon: string,
    name: string,
    ndcId: number
}

export const CommunityItem = ({icon, ndcId, name}:PropsWithChildren<communityItem>) => {
    const dispatch = useDispatch()

    function communityHandler() {
        dispatch(initChats(ndcId, name))
    }

    return(
        <div className={"community-item"} onClick={communityHandler}>
            <ComunityIcon src={icon}/>
            <div className={"community-item_title"}>{name}</div>
        </div>
    )
}

CommunityItem.propTypes = {
    icon: string,
    name: string,
    ndcId: number
}
