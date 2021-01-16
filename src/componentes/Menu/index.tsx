import React from 'react'
import Button from './ButtonMenu';
import { FaHome, FaTrophy, FaClipboardCheck } from "react-icons/fa";
import { IoGameControllerSharp } from "react-icons/io5";
import { MdForum } from "react-icons/md";
import { HiMail } from "react-icons/hi";

import classes from './Menu.module.scss';

interface IMenu {

}

const Menu: React.FC<IMenu> = () => {

    return (
        <div className={classes.container}>
            <div className={classes.menu}>
                <Button icon={<FaHome />} />
                <Button label="Partidas" icon={<IoGameControllerSharp />} />
                <Button label="Campeonatos" icon={<FaTrophy />} />
                <Button label="Forum" icon={<MdForum />} />
                <Button label="LeaderBoard" icon={<FaClipboardCheck />} />
                <Button label="Contact" icon={<HiMail />} />
            </div>
        </div>
    )
}

export default Menu;