import React, {PropsWithChildren, useEffect, useState} from "react";
import send_icon from "@/assets/send-message-icon.jpg"
import "@/css/Chat.css"
import {EnemyMessage} from "@/components/EnemyMessage";
import {YoursMessage} from "@/components/YoursMessage";
import {connect} from "react-redux";
import {Loader} from "@/components/Loader";
import {sendMessage, updateChats} from "@/store/actions/chatAction";
import {FaildeContent} from "@/components/FailedContent";
import emojione from "emojione";
import {InputMessage} from "@/components/inputMessage";

interface appRedux {
    loading: Boolean,
    chat: any[],
    title: string,
    uid: string,
    dispatch: any,
    ndcId: number,
    threadId: string
}

const MessageBox = ({loading, title, uid, chat, ndcId, threadId, dispatch}: PropsWithChildren<appRedux>) => {

    if (!loading && title == '') {
        return (<p className={"alert"} style={{color:"gray"}}>Нету сообщений</p>)
    }

    useEffect( () => {
        if(threadId !== "" && ndcId !== 0)
        dispatch(updateChats(ndcId, threadId))
    },[threadId])

    return (
        <React.Fragment>
            {!loading ?
                <React.Fragment>
                    <div className="chat_title"><p dangerouslySetInnerHTML={{__html: title == null ? "Личные сообщения" : String(emojione.toImage(title))}}/></div>
                    <div className="chat_box">
                        <div className="chat_messages scrollable">
                            {chat.map((item, index:number) => {
                                if(item.author !== undefined) {
                                    if (uid === item.author.uid)
                                        return <YoursMessage key={index} {...item}/>
                                    else
                                        return <EnemyMessage key={index} {...item}/>
                                }
                                else {
                                    return <FaildeContent key={index} {...item}/>
                                }
                            })}
                        </div>
                        <InputMessage ndcId={ndcId} threadId={threadId}/>
                    </div>
                </React.Fragment> : <p className={"alert"}><Loader/></p>}
        </React.Fragment>
    )
}

const mapCommunity = (state: {
    account: {
        uid: string;
    };
    chat: {
        title: string,
        isLoading: boolean,
        list: any[],
        threadId: string,
        ndcId: number
    };
}) => ({
    loading: state.chat.isLoading,
    chat: state.chat.list,
    title: state.chat.title,
    uid: state.account.uid,
    threadId: state.chat.threadId,
    ndcId: state.chat.ndcId
})

export default connect(mapCommunity)(MessageBox)
