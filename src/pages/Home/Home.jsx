import React from 'react';
import Brands from '../../components/HomeComponents/Brands';
import styles from './Home.module.scss';
const Home= () => {
    return (
        <div className={styles.container}>
            <Brands/>
        </div>
    );
}

export default Home;