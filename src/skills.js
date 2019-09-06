import React from 'react';
import styles from './skills.module.css';
import react from './images/react_100x100.png'
import js from './images/JavaScript_logo.png'
import HTML from './images/HTML.png'
import Item from "./item";
import Skill from "./skill-element";
import Fade from "react-reveal/Fade";

const Skills=()=> {
    let MySkills = [
        {
            src: react,
            skillName: 'React', def: '"С нуля"', learn: "https://www.youtube.com/watch?v=Zgd9IlbhDcU"
        },
        {
            src: js,
            skillName: 'JavaScript', def: 'in the process of improvement', learn: "https://developer.mozilla.org/ru/docs/Web/JavaScript"
        },
        {
            src: HTML,
            skillName: 'HTML/CSS', def: 'Done', learn: "https://www.wickedlysmart.com/head-first-html-css/"
        }
    ];
    MySkills = MySkills.map(m => <Skill src={m.src} skillName={m.skillName} def={m.def} learn={m.learn}/>);
  return (
      <div className={styles.skills} id={"skills"}>
          <Fade bottom>
          <div className={styles.container}>
              <div className={styles.header}>Мои навыки </div>
              <div className={styles.elements}>
                  {MySkills}
              </div>
              <div>Познаю JS и React с июня'19</div>
          </div>
          </Fade>
      </div>
  );
};

export default Skills;