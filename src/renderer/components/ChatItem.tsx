import React, {PropsWithChildren} from "react";
import PropTypes from "prop-types"
import {AllChatList} from "@/components/AllChatList";
import {SelfChatList} from "@/components/SelfChatList";
import {useDispatch} from "react-redux";
import {initChat, updateChats} from "@/store/actions/chatAction";

interface chatProps {
    item: any
}

export const ChatItem = ({item}: PropsWithChildren<chatProps>) => {
    const dispatch = useDispatch()

    function chatHandler() {
        dispatch(initChat(item.ndcId, item.threadId, item.title))
    }

    return (
        <div onClick={chatHandler}>
            {item.type === 2 ?
                <AllChatList title={item.title} icon={item.icon} lastMessage={item.lastMessageSummary.content}/> :
                <SelfChatList title={item.author.nickname} icon={item.author.icon}
                              lastMessage={item.lastMessageSummary.content}/>}
        </div>
    )

}

ChatItem.propTypes = {
    item: PropTypes.object
}
