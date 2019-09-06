import React from 'react';
import styles from './main.module.css';
import myphoto from './images/MyPhoto.jpg'
import Fade from "react-reveal/Fade";
import './App.css';

function Main() {
    return (
        <div className={styles.main} id={"main"}>
            <div className={styles.container}>
                <div className={styles.myPhoto}>
                    <Fade left duration={3000} delay={2000}>
                    <img className={styles.image} src={myphoto}/>
                    </Fade>
                </div>
               {/* <div className={styles.inner}>*/}
                <div className={styles.greeting}>
                    <Fade right duration={3000} delay={5000}>
                    <span>Привет!</span>
                    <span>Меня зовут Андрей Борозна</span>
                    <span>Я front-end разработчик(junior)</span>
                    </Fade>
                </div>

            </div>
        </div>
    );
}

export default Main;

