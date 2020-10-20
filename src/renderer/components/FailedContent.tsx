import React, {PropsWithChildren} from "react";
import {any, number, string} from "prop-types"
import {IAminoMessage} from "aminoclient/dist/AminoTypes";
import {MessageList} from "@/components/MessageList";
import {formatDate} from "@/dateFormater"


export const FaildeContent = ({content, type, mediaValue, mediaType, createdTime}: PropsWithChildren<IAminoMessage>) => {

    return (
        <div className={"message_block"}>
            <div className="message_enemy message">
                <p>System</p>
                <MessageList mediaType={mediaType} mediaValue={mediaValue} content={content} type={type} classColor={"enemy_audio"}/>
                <div className="time">{formatDate(createdTime)}</div>
            </div>
        </div>
    )

}

FaildeContent.propTypes = {
    threadId: string,
    mediaType: number,
    content: any,
    mediaValue: any,
    clientRefId: any,
    messageId: string,
    createdTime: any,
    type: number
}
