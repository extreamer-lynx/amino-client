import React, {PropsWithChildren} from "react";
import {string} from "prop-types";

const stickers = {
    "collectionId": "mood",
    "collectionType": 0,
    "stickerList": [{
        "icon": "//wa1.narvii.com/static/emojione_ios/1f600.png",
        "name": "",
        "stickerId": "e/f09f9880"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f601.png",
        "name": "",
        "stickerId": "e/f09f9881"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f602.png",
        "name": "",
        "stickerId": "e/f09f9882"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f923.png",
        "name": "",
        "stickerId": "e/f09fa4a3"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f603.png",
        "name": "",
        "stickerId": "e/f09f9883"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f604.png",
        "name": "",
        "stickerId": "e/f09f9884"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f605.png",
        "name": "",
        "stickerId": "e/f09f9885"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f606.png",
        "name": "",
        "stickerId": "e/f09f9886"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f609.png",
        "name": "",
        "stickerId": "e/f09f9889"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f60a.png",
        "name": "",
        "stickerId": "e/f09f988a"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f60b.png",
        "name": "",
        "stickerId": "e/f09f988b"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f60e.png",
        "name": "",
        "stickerId": "e/f09f988e"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f60d.png",
        "name": "",
        "stickerId": "e/f09f988d"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f618.png",
        "name": "",
        "stickerId": "e/f09f9898"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f617.png",
        "name": "",
        "stickerId": "e/f09f9897"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f619.png",
        "name": "",
        "stickerId": "e/f09f9899"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f61a.png",
        "name": "",
        "stickerId": "e/f09f989a"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/263a.png",
        "name": "",
        "stickerId": "e/e298ba"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f642.png",
        "name": "",
        "stickerId": "e/f09f9982"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f917.png",
        "name": "",
        "stickerId": "e/f09fa497"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f914.png",
        "name": "",
        "stickerId": "e/f09fa494"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f610.png",
        "name": "",
        "stickerId": "e/f09f9890"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f611.png",
        "name": "",
        "stickerId": "e/f09f9891"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f636.png",
        "name": "",
        "stickerId": "e/f09f98b6"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f644.png",
        "name": "",
        "stickerId": "e/f09f9984"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f60f.png",
        "name": "",
        "stickerId": "e/f09f988f"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f623.png",
        "name": "",
        "stickerId": "e/f09f98a3"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f625.png",
        "name": "",
        "stickerId": "e/f09f98a5"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f62e.png",
        "name": "",
        "stickerId": "e/f09f98ae"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f910.png",
        "name": "",
        "stickerId": "e/f09fa490"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f62f.png",
        "name": "",
        "stickerId": "e/f09f98af"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f62a.png",
        "name": "",
        "stickerId": "e/f09f98aa"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f643.png",
        "name": "",
        "stickerId": "e/f09f9983"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f911.png",
        "name": "",
        "stickerId": "e/f09fa491"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f632.png",
        "name": "",
        "stickerId": "e/f09f98b2"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/2639.png",
        "name": "",
        "stickerId": "e/e298b9"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f641.png",
        "name": "",
        "stickerId": "e/f09f9981"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f616.png",
        "name": "",
        "stickerId": "e/f09f9896"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f61e.png",
        "name": "",
        "stickerId": "e/f09f989e"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f61f.png",
        "name": "",
        "stickerId": "e/f09f989f"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f624.png",
        "name": "",
        "stickerId": "e/f09f98a4"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f622.png",
        "name": "",
        "stickerId": "e/f09f98a2"
    }, {
        "icon": "//wa1.narvii.com/static/emojione_ios/1f62d.png",
        "name": "",
        "stickerId": "e/f09f98ad"
    }, {"icon": "//wa1.narvii.com/static/emojione_ios/1f626.png", "name": "", "stickerId": "e/f09f98a6"}]
}

interface propsStickers {
    stickerId: string
}

export const StickersItem = ({stickerId}: PropsWithChildren<propsStickers>) => {

    return (
        <React.Fragment>
            {stickers.stickerList.map((item) => {
                if (stickerId === item.stickerId)
                    return <img src={item.icon} alt={"sticker"}/>
            })}
        </React.Fragment>
    )
}

StickersItem.propTypes = {
    stickerId: string
}
