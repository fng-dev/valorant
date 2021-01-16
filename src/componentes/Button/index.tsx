import React from 'react'

import classes from './Button.module.scss'
interface IButton {
    label: string,
    left?: boolean
}

const Button: React.FC<IButton> = (props) => {

    const { label, left } = props;
    return (
        <div className={left ? classes.containerLeft : classes.container}>
            <div className={classes.button}>{label}</div>
            <div className={classes.effect} />
        </div>
    )
}

export default Button;