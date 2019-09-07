import React from 'react';
import Links from "./links";
import styles from "./footer.module.css";
import Item from "./item";

const Footer = () => {
    return (
        <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.links}>
                <Links href={'https://github.com/KMB18AndreiBarazna'}
                        src={'https://repository-images.githubusercontent.com/147589929/30740300-7a5c-11e9-81b2-cbc60f90f6b0'}/>
                <Links href={'https://www.linkedin.com/in/andrei-barazna-bb2527192/'}
                        src={'https://android-android.ru/upload/iblock/0d3/16.jpg'}/>
                <Links href={'https://t.me/Andrei_Barazna'} src={'https://telegram.org/img/t_logo.png'}/>
                <Links href={'https://vk.com/'}
                        src={'https://image.flaticon.com/icons/png/512/124/124029.png'}/>
            </div>
            <div className={styles.rights}>
                {/*©*/} {/*&copy;*/} &#169; 2019 All rights reserved
            </div>
        </div>
    </div>
    )
};

export default Footer;
