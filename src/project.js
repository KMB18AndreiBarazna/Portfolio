import React from 'react';
import styles from './projects.module.css';
import Item from "./item";

const Project = (props) => {
    return (
        <div className={styles.project}>
        <div className={styles.img}>
            <a href={props.href} target="_blank">
            {/*<a href={props.src} target="_blank">*/}
             <img src={props.src} alt={'проект'}/>
            </a>
        </div>
            <Item i={props.name}/>
        <div className={styles.def}>
            {props.def}
        </div>
    </div>
    )
};

export default Project;