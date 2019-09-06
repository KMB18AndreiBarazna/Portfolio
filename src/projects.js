import React from 'react';
import styles from './projects.module.css';
import Item from "./item";
import Project from "./project";
import net from './images/net2.png'
import Todolist from './images/Todolist.png'
import Fade from "react-reveal/Fade";

const Projects = () => {
    return (
        <div className={styles.projects} id={"projects"}>
            <Fade bottom>
        <a name="Мои проекты" className={styles.a}/>
        <div className={styles.container}>
            <div className={styles.header}>Мои проекты </div>
            {/*<div className={styles.line}></div>*/}
            <div className={styles.myProjects}>
                <Project name={'Relax.net'} def={'social network with relax'}
                      src={net}
                      href={'https://github.com/KMB18AndreiBarazna/MyFirstProgramm/'}/>
                <Project name={'TodoList'} def={'Заметки на день'} src={Todolist}/>
            </div>
        </div>
            </Fade>
    </div>
    )
};
export default Projects;




