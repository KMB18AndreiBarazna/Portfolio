import React from 'react';
import styles from './footer.module.css';

const Links = (props) => {
    return (
        <div className={styles.logo}>
        <a href={props.href} target="_blank">
            <img src={props.src} alt={'logo'}/>
        </a>
    </div>
    )
};

export default Links;