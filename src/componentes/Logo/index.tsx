import React from 'react'

import classes from './Logo.module.scss';

interface ILogo {

}

const Logo: React.FC<ILogo> = () => {

    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.title}>Valorant.</div>
                <div className={classes.redname}>GG</div>
            </div>
            <div className={classes.subtitle}>
                Arena Gaming
            </div>
        </div>
    )
}

export default Logo;