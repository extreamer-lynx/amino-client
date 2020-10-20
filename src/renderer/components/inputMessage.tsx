import React, {PropsWithChildren, useState} from "react";
import send_icon from "@/assets/send-message-icon.jpg";
import {sendMessage} from "@/store/actions/chatAction";
import {useDispatch} from "react-redux";

export const InputMessage = ({ndcId, threadId}: PropsWithChildren<{ ndcId: number, threadId: string }>) => {
    const [message, setMessage] = useState("")
    const dispatch = useDispatch()

    const messageHandler = (e: any) => {
        e.preventDefault()
        setMessage(e.target.value)
    }

    const sendHandler = (e: any) => {
        e.preventDefault()

        dispatch(sendMessage(ndcId, threadId, message))
        setMessage("")
    }

    const sendEnterHandler = (e: any) => {
        e.preventDefault()
        if (e.keyCode === 13) {
            dispatch(sendMessage(ndcId, threadId, message))
            setMessage("")
        }
    }


    return (
    <React.Fragment>
        <form className="chat_form_input">
            <textarea id={"message"} value={message} className={"input"} onChange={messageHandler}/>
            <button><img src={send_icon} alt="send button" onClick={sendHandler} onKeyPress={sendEnterHandler}/>
            </button>
        </form>
    </React.Fragment>
)
}
