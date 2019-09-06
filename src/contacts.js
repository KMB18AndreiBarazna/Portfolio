import React from 'react';
import styles from './contacts.module.css';
import Item from "./item";
import Bounce from "react-reveal/Fade";

const Contacts=()=> {
  return (
<div>
    <Bounce bottom>
      <div className={styles.contacts} id={"contacts"}>

          <a name="Contact" className={styles.a}/>
          <div className={styles.container}>
              <div className={styles.header}>Контакты</div>
              {/*<div className={styles.line}/>*/}
              <span className={styles.email}>2andrewbor@gmail.com</span>
          </div>
      </div>
          </Bounce>

</div>
  );
}

export default Contacts;