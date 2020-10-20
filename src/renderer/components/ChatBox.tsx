import React, {PropsWithChildren} from "react";
import "@/css/Chats.css"
import {ChatItem} from "@/components/ChatItem";
import {connect} from "react-redux";
import {Loader} from "@/components/Loader";
import {IAminoThread} from "aminoclient/dist/AminoTypes";

interface appRedux {
    loading: Boolean,
    title: string,
    ndcId: number,
    chats: IAminoThread[]
}

const ChatBox = ({loading, title, chats}: PropsWithChildren<appRedux>) => {

    if (!loading && chats.length == 0) {
        return (
            <React.Fragment>
                <div className="community_title">
                    <h3>{title}</h3>
                </div>
                <p className={"alert"}>Нет чатов</p>
            </React.Fragment>
        )
    } else if (title.length == 0 && !loading) {
        return (<p className={"alert"} style={{color: "gray"}}>Выберите сообщество</p>)
    }

    return (
        <React.Fragment>
            {!loading ? <React.Fragment>
                <div className="community_title">
                    <h3>{title}</h3>
                </div>
                <div className="scrollable">
                    {chats.map((item: IAminoThread) => <ChatItem key={Number(item.latestActivityTime)} item={item}/>)}
                </div>
            </React.Fragment> : <p className={"alert"}><Loader/></p>}
        </React.Fragment>
    )
}

const mapCommunity = (state: {
    account: {
        Profile: {
            uid: string
        }
    };

    chats: {
        name: string,
        isLoading: boolean,
        list: any[],
        ndcId: number
    };
}) => ({
    chats: state.chats.list,
    loading: state.chats.isLoading,
    title: state.chats.name,
    ndcId: state.chats.ndcId
})

export default connect(mapCommunity)(ChatBox)
