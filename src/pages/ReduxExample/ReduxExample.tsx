import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { turnOff, turnOn } from '../../redux/ducks/loading';
import { Types } from '../../redux/ducks/auth';
import classes from './ReduxExample.module.scss';

const Example = () => {

    const dispatch = useDispatch();
    const loading = useSelector((store: RootStateOrAny) => store.loading.isLoading);
    const auth = useSelector((store: RootStateOrAny) => store.auth);

    useEffect(() => {
        console.log(loading)
    }, [loading])

    const toogleLoading = () => {
        if (loading) {
            dispatch(turnOff());
        } else {
            dispatch(turnOn());
        }
    }

    const toogleLogin = () => {
        if (auth.isLogged) {
            dispatch({ type: Types.LOGOUT });
        } else {
            dispatch(turnOn());
            setTimeout(() => {
                dispatch({
                    type: Types.LOGIN,
                    payload: {
                        isLogged: true,
                        token: 'lkjafads87hpjlasdf87523hiuiHiojsdflkjafads87hpjlasdf87523hiuiHiojsdf',
                        user: {
                            name: 'Franco',
                            role: 'developer'
                        },
                    }
                });
                dispatch(turnOff());
            }, 2000);
        }
    }

    const Logged = () => (
        <>
            <p>Nombre: {auth.user.name} </p>
            <p>Role: {auth.user.role} </p>
            <p>Token: {auth.token} </p>
        </>
    )

    return (
        <div className={classes.content}>
            <div className={classes.title}>Redux Example</div>
            <div className={classes.loading}>
                <div className="status">Status Loading: {loading ? 'TRUE' : 'FALSE'}</div>
                <button onClick={toogleLoading}>Toogle Status</button>
            </div>
            <div className={classes.loading}>
                <div className="status">{auth.isLogged ? <Logged /> : 'Status Loading:FALSE'}</div>
                <button onClick={toogleLogin}>{auth.isLogged ? 'LOGOFF' : 'LOGIN'}</button>
            </div>
        </div>
    )

}

export default Example;