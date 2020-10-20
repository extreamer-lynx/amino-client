import React, {PropsWithChildren, useState} from "react";
import {any, number, string} from "prop-types"
import {IAminoMessage} from "aminoclient/dist/AminoTypes";
import {MessageList} from "@/components/MessageList";
import {formatDate} from "@/dateFormater"
import emojione from "emojione"
import {UserAvatar} from "@/components/LoadingAvatars";


export const EnemyMessage = ({content, author, type, mediaValue, mediaType, createdTime}: PropsWithChildren<IAminoMessage>) => {

    return (
        <div className={"message_block"}>
            <UserAvatar src={author.icon}/>
            <div className="message_enemy message">
                <div style={{
                    margin: "4px 0",
                    color: "lightskyblue"
                }} dangerouslySetInnerHTML={{__html: String(emojione.toImage(author.nickname))}}/>
                <MessageList mediaType={mediaType} mediaValue={mediaValue} content={content} type={type}
                             classColor={"enemy_audio"}/>
                <div className="time">{formatDate(createdTime)}</div>
            </div>
        </div>
    )

}

EnemyMessage.propTypes = {
    author: any,
    threadId: string,
    mediaType: number,
    content: any,
    mediaValue: any,
    clientRefId: any,
    messageId: string,
    createdTime: any,
    type: number
}
