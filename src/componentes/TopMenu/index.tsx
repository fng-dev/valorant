import React from 'react';

import { FaTwitter, FaFacebookSquare, FaInstagram, FaRegUserCircle } from "react-icons/fa";

import classes from './TopMenu.module.scss';

interface ITopMenu {

}

const TopMenu: React.FC<ITopMenu> = () => {
    return (
        <div className={classes.menuTop}>
            <div className={classes.effect} />
            <div className={classes.rrss}>
                <FaTwitter />
                <FaFacebookSquare />
                <FaInstagram />
            </div>
            <div className={classes.login}>
                <div className={classes.line} />
                <FaRegUserCircle />
                <div className={classes.text}>
                    Login
                </div>
            </div>
        </div>
    )
}

export default TopMenu;