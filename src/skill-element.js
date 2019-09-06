import React from 'react';
import styles from './skills.module.css';
import Item from './item';

const Skill = (props) => {
    return <div className={styles.element}>
        <div className={styles.img}>
            <img src={props.src}
                 alt={'logo'}/>
        </div>
        <a href={props.learn} target="_blank">
            <Item i={props.skillName}/>
        </a>
        <div className={styles.def}>
            {props.def}
        </div>
    </div>

};

export default Skill;