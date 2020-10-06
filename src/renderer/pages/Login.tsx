import React, {useState} from "react";
import "@/css/Login.css"
import AminoLogo from "@/assets/amino-logo.svg"
import {useDispatch} from "react-redux";
import { login } from "@/store/actions/accountAction";

export const Login: React.FC = () => {
    const [data, setData] = useState({})
    const dispatch = useDispatch()

    const dataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({...data, [e.target.id]: e.target.value});
    }

    const loginHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(login())
    }

    return (
        <div className="main">
            <form className="form1">
                <img alt={"logo"} src={AminoLogo} width={"100px"} height={"50px"} style={{marginTop: "15px"}}/>
                <input id={"email"} className="input" type="text" placeholder="Email" onChange={dataHandler}/>
                <input id={"password"} className="input" type="password" placeholder="Пароль" onChange={dataHandler}/>
                <button className="submit" onClick={loginHandler}>Войти</button>
            </form>
        </div>
    )
}
