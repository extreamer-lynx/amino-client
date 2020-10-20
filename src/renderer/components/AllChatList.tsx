import React, {PropsWithChildren} from "react";
import PropTypes from "prop-types"
import emojione from "emojione";

interface chatProps {
    title: string,
    icon: string,
    lastMessage: string
}

export const AllChatList = ({title, icon, lastMessage}: PropsWithChildren<chatProps>) => {

    return (
        <div className="chats_item">
            <img src={icon} alt="chat-logo"/>
            <div className="chat_item_data">
                <p style={{color: "whitesmoke"}} className={"smiles"}
                   dangerouslySetInnerHTML={{__html: String(emojione.toImage(title))}}/>
                {lastMessage && <p style={{color:"grey"}} className={"smiles"}
                                   dangerouslySetInnerHTML={{__html: String(emojione.toImage(lastMessage))}}/>}
            </div>
        </div>
    )
}

AllChatList.propTypes = {
    item: PropTypes.object
}
