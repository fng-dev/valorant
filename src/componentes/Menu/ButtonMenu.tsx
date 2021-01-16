import React from 'react';

import classes from './Menu.module.scss';

interface IButtonMenu {
    icon?: any,
    label?: string
}

const ButtonMenu: React.FC<IButtonMenu> = (props) => {
    const { icon, label } = props;

    return (
        <div className={classes.item}>
            <div className={classes.buttonEffect} />
            <div className={classes.content}>
                {icon} {label || 'Home'}
            </div>
        </div>
    )
}

export default ButtonMenu;