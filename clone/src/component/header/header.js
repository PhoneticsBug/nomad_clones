import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const HeaderBtns = ({ txt, link }) => { 
        return (
            <>
            <Link to={'/' + link}> 
                <button
                    className="links-btn">
                    {txt}
                </button>
            </Link>
            </>
        )
    }

    return (
        <>
        <div className="header">
            <HeaderBtns txt="Clean up" link="cleanup"/> 
            <HeaderBtns txt="Coin Converter" link="coin"/> 
            <HeaderBtns txt="Router" link="learnrouter"/> 
            <HeaderBtns txt="Movies" link=""/> 
            <HeaderBtns txt="Todo List" link="todolist"/> 
            <HeaderBtns txt="useState" link="learnusestate"/> 
            <HeaderBtns txt="About" link="intro"/> 
        </div>
        <div className="margin-box"></div>
        </>
    );
};

export default Header;
