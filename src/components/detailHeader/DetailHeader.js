import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./DetailHeader.scss";
import StyleContext from "../../contexts/StyleContext";
import {
    greeting
} from "../../portfolio";
import {NavLink} from "react-router-dom";

function DetailHeader() {
    const {isDark} = useContext(StyleContext);

    return (
        <Headroom>
            <header className={isDark ? "dark-menu header" : "header"}>
                <NavLink to="/" className="logo">
                    <span className="grey-color"> &lt;</span>
                    <span className="logo-name">{greeting.username}</span>
                    <span className="grey-color">/&gt;</span>
                </NavLink>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label
                    className="menu-icon"
                    htmlFor="menu-btn"
                    style={{color: "white"}}
                >
                    <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
                </label>
            </header>
        </Headroom>
    );
}
export default DetailHeader;
