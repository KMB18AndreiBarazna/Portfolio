import React from 'react';
import styles from './blockTitle.module.css';

import './App.css';

function BlockTitle() {
    return (
        <div className={styles.blockTitle}>
            <div className={styles.line}></div>
        </div>
    );
}

export default BlockTitle;
/*<h2 className={styles.title}>{props.title}</h2>*/