import React from "react";
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu";

export default props => {
    return (
        <Menu {...props}>
            <Link to="/" className="menu-item" >
                Home
            </Link>

            <Link to="/benda-pusaka" className="menu-item" >
                Benda Pusaka
            </Link>


        </Menu>
    );
};