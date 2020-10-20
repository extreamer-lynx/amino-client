import React, {PropsWithChildren} from "react";
import {number, string} from "prop-types";
import {StickersItem} from "@/components/StickersItem";
import emojione from "emojione";

interface messageProps {
    mediaType?: number,
    mediaValue: any,
    content: any,
    type: any,
    classColor: string
}

export function MessageList({mediaType, mediaValue, content, type,classColor }: PropsWithChildren<messageProps>) {

    const systemMessageStyle = {
        color: "#F34C2A",
        margin:"4px"
    }

    switch (type) {
        case 100:
            return <p style={systemMessageStyle}>Сообщение удалено</p>
        case 102:
            return <p style={systemMessageStyle}>Вышел из чата</p>
        case 101:
            return <p style={systemMessageStyle}>Зашел в чат</p>
        case 110:
            return <p style={systemMessageStyle}>Закончил голосовой чат</p>
        case 107:
            return <p style={systemMessageStyle}>Запустил голосовой чат</p>
        case 103:
            return <p style={systemMessageStyle}>Создал чат</p>
    }

    switch (mediaType) {
        case 113:
            return <StickersItem stickerId={mediaValue.replace("ndcsticker://", "")}/>
        case 100:
            if (!mediaValue.includes("ndcsticker://"))
                return <img src={mediaValue}
                            style={{maxHeight: "100%", maxWidth: "100%", minHeight: "30%", minWidth: "30%"}}/>;
        case 103:
            return <iframe width="100%" height="100%"
                           src={`https://www.youtube-nocookie.com/embed/${mediaValue.replace("ytv://", "")}?rel=0&amp;showinfo=0`}
                           frameBorder="0" allow="encrypted-media" allowFullScreen={true}/>;
        case 110:
            // ToDo - Add style from https://codepen.io/gregh/pen/NdVvbm
            return (
                <audio controls className={classColor}>
                    <source src={mediaValue} type="audio/aac"/>
                </audio>
            )
        default:
            return <p className={"smiles"} style={{color: "whitesmoke", margin: "3px"}} >{content}</p>
    }
}

MessageList.propTypes = {
    mediaType: number,
    mediaValue: string,
    content: string,
    classColor:string
}

