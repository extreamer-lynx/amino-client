import React, {PropsWithChildren, useState} from "react";
import ContentLoader from "react-content-loader";
import banned from "@/assets/banned.svg"

export const UserAvatar = ({src}: PropsWithChildren<{ src: string }>) => {
    const [handler, setHandler] = useState({loading: true, error: false})

    const img = new Image()
    img.src = src

    img.onload = () => {
        setHandler({...handler, loading: false})
    }

    img.onerror = () => {
        setHandler({...handler, error: true})
    }

    return (
        <React.Fragment>
            {!handler.loading ? <img src={img.src} alt="avatar"/> : handler.error ?
                <img src={banned} alt={"banned"}/> : <ContentLoader
                    speed={2}
                    width={"50px"}
                    height={"50px"}
                    viewBox="0 0 100 100"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#E1BFB8"
                >
                    <rect x="0" y="0" rx="50" ry="50" width="100%" height="100%"/>
                </ContentLoader>
            }
        </React.Fragment>
    )
}
