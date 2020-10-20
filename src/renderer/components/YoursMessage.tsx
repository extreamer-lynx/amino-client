import React, {PropsWithChildren} from "react";
import PropTypes, {any, number, string} from "prop-types"
import {MessageList} from "@/components/MessageList";
import {IAminoMessage} from "aminoclient/dist/AminoTypes";
import {EnemyMessage} from "@/components/EnemyMessage";
import {formatDate} from "@/dateFormater"

export const YoursMessage = ({content, type, mediaType, mediaValue, createdTime}: PropsWithChildren<IAminoMessage>) => {

    return(
        <React.Fragment>
            <div className="message_yours message">
                <MessageList mediaType={mediaType} mediaValue={mediaValue} content={content} type = {type} classColor={"you_audio"}/>
                <div className="time">{formatDate(createdTime)}</div>
            </div>
        </React.Fragment>
    )

}

EnemyMessage.propTypes = {
    author: any,
    threadId: string,
    mediaType: number,
    content: any,
    mediaValue: any,
    clientRefId: string,
    messageId: string,
    createdTime: any,
    type: number
}
