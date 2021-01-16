import React, { useEffect } from 'react';

import classes from './Main.module.scss';

import TopMenu from '../../componentes/TopMenu'
import Menu from '../../componentes/Menu'
import Logo from '../../componentes/Logo'

interface IMain {

}

const Main: React.FC<IMain> = (props: any) => {

    useEffect(() => {
        console.log(props);
    }, [props])

    const { children } = props;

    return (
        <div className={classes.container}>
            <div className={classes.effect} />
            <TopMenu />
            <Logo />
            <Menu />
            <div className={classes.content}>
                { children}
            </div>
        </div>
    );
}

export default Main;