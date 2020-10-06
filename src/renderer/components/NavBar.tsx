import React from "react";
import MenuLogo from "@/assets/menu.svg"

const NavBar = () => {
    return(
        <React.Fragment>
            <input type="checkbox" id={"nav-check"} className={"sidebar-open"}/>
            <nav>
                <label htmlFor="nav-check"><img src={MenuLogo} alt="menu"/></label>
            </nav>
            <div className="sidenav">

            </div>
        </React.Fragment>
    )
}

export default NavBar
