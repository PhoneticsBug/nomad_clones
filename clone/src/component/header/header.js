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
            <HeaderBtns txt="Clean up" link="nomad_clones/cleanup"/> 
            <HeaderBtns txt="Coin Converter" link="nomad_clones/coin"/> 
            <HeaderBtns txt="Router" link="nomad_clones/learnrouter"/> 
            <HeaderBtns txt="Movies" link="nomad_clones/"/> 
            <HeaderBtns txt="Todo List" link="nomad_clones/todolist"/> 
            <HeaderBtns txt="useState" link="nomad_clones/learnusestate"/> 
            <HeaderBtns txt="About" link="nomad_clones/intro"/> 
        </div>
        <div className="margin-box"></div>
        </>
    );
};

export default Header;
