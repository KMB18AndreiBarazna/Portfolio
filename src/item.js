import React from 'react';
import styles from './item.module.css';
import Fade from 'react-reveal/Fade';

const Item = (props) => {
    return (
        <div>
            <Fade bottom>
                <span className={styles.item}>
                     {props.i}
                </span>
            </Fade>
        </div>
    )
};

export default Item;