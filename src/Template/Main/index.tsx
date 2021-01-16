import React, { useEffect } from 'react';

import classes from './Main.module.scss';

import TopMenu from '../../componentes/TopMenu'
import Menu from '../../componentes/Menu'

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
            <Menu />
            <div className={classes.content}>
                { children}
            </div>
        </div>
    );
}

export default Main;