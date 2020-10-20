import React, {PropsWithChildren, useState} from "react";
import "@/css/Login.css"
import AminoLogo from "@/assets/amino-logo.svg"
import {connect, useDispatch} from "react-redux";
import { login } from "@/store/actions/accountAction";
import {string} from "prop-types";
import {Loader} from "@/components/Loader";

interface appRedux {
    dispatch: any
    loading: Boolean,
    error: string
}

const Login = ({loading, error }:PropsWithChildren<appRedux>) => {
    const [data, setData] = useState({email:string, password:string, deviceId: string})
    const dispatch = useDispatch()

    const dataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.target.id]: e.target.value});
    }

    const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(login(data.email, data.password, data.deviceId))
    }

    return (
            <form className="form1">
                <img alt={"logo"} src={AminoLogo} width={"100px"} height={"50px"} style={{marginTop: "15px"}}/>
                <input id={"deviceId"} className="input" type="text" placeholder="Device Id" onChange={dataHandler}/>
                <input id={"email"} className="input" type="text" placeholder="Email" onChange={dataHandler}/>
                <input id={"password"} className="input" type="password" placeholder="Пароль" onChange={dataHandler}/>
                <button className="submit" onClick={loginHandler}>Войти</button>
                {error ? "Ошибка: " + error : null}
                {loading ? <Loader/> : null}
            </form>
    )
}

const mapLogin = (state: { app: { isLoading: Boolean; error: string }; }) => ({
    loading: state.app.isLoading,
    error: state.app.error
})

export default connect(mapLogin)(Login)
