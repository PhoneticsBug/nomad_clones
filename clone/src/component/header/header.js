import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const importAll = (r) => {
            return r.keys().map(r);
        };
        const pageContext = require.context("../../learning", true, /\.js$/);
        const pageFiles = importAll(pageContext);
        const pageNames = pageFiles.map((file) => file.default.name);
        setPages(pageNames.filter(page => page !== "home"));
    }, []);

    const linkButton = (text, name) => {
        return (
            <Link to={text} key={text}>
                <button
                    className="links-btn">
                    {name}
                </button>
            </Link>
        );
    };

    return (
        <>
        <div className="header">
            
            <Link to="/">
                <button
                    className="links-btn">
                    home
                </button>
            </Link>
            {pages.map((page, index) => linkButton(page, page.split(".")[0], index))}
        </div>
        <div className="margin-box"></div>
        </>
    );
};

export default Header;
