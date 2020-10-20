import React from "react";
import {Route, Switch} from "react-router";
import Login from "@/pages/Login";
import {Home} from "@/pages/Home";
import {connect} from "react-redux";

// @ts-ignore
const Routes: React.FC = ({account}) => {

    if(account)
    {
        return (
            <Switch>
                <Route exact path="/" render={() => (<Home/>)} />
            </Switch>
        )
    }
    else
    {
        return (
            <Switch>
                <Route exact path="/" render={() => (<Login/>)} />
            </Switch>
        )
    }
}

export default connect((state) => {
    // @ts-ignore
    return {account: state.account.Authorization}})(Routes)
