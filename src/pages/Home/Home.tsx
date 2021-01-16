import React from 'react';
import classes from './Home.module.scss';

import Main from '../../Template/Main'
import Button from '../../componentes/Button'

interface IMain {

}

const Home: React.FC<IMain> = () => {

    return (
        <Main>
            <div className={classes.container}>
                <div className={classes.text}>
                    <div className={classes.mainText}>Crie e Dispute</div>
                    <div className={classes.subText}>Partidas Personalizadas</div>
                    <div className={classes.info}>
                        Dispute partidas com seus amigos e participe do nosso leaderboard dividido por categorias.
                    </div>

                    <Button label="Saiba Mais" />
                </div>
            </div>
        </Main>
    )
}

export default Home;