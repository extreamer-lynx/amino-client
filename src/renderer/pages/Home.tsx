import React from "react";
import NavBar from "@/components/NavBar";
import "@/css/Home.css"
import ChatBox from "@/components/ChatBox";
import MessageBox from "@/components/MessageBox";


export class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="main">
                    <div className="sidenav scrollable">
                        <NavBar/>
                    </div>

                    <div className="side">
                        <ChatBox/>
                    </div>

                    <div className="body">
                        <MessageBox/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
