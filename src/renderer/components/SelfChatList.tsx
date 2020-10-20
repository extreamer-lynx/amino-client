import React, {PropsWithChildren} from "react";
import PropTypes from "prop-types"
import emojione from "emojione";

interface chatProps {
    title: string,
    icon: string,
    lastMessage: string
}

export const SelfChatList = ({title, icon, lastMessage}: PropsWithChildren<chatProps>) => {

    return (
        <div className={"chats_item"}>
            <img src={icon} alt="chat-logo" className={"self"}/>
            <div className="chat_item_data">
                <p style={{color: "whitesmoke"}} className={"smiles"}
                   dangerouslySetInnerHTML={{__html: String(emojione.toImage(title))}}/>
                <p style={{color:"grey"}}>{lastMessage}</p>
            </div>
        </div>
    )
}

SelfChatList.propTypes = {
    item: PropTypes.object
}
