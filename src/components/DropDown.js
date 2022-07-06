import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Styles
import styles from './DropDown.module.css';

const DropDown = ({ changeCategory, all }) => {

    const [isOpen, setIsOpen] = useState(false);

    const openHandler = () => {
        setIsOpen(!isOpen);
    }

    const changeHandler = (e) => {
        changeCategory(e);
        openHandler();
    }

    return (
        <motion.div whileTap={{scale: 0.9}} className={styles.dropdown}>
            <button onClick={openHandler} className={styles.dropdown__change}>
                {all ? "All Task" : "Done Task"}<span>▼</span>
            </button>
            <div className={isOpen ? `${styles.itemcontainer}${styles.show}` : `${styles.itemcontainer}`}>
                <div onClick={(e) => changeHandler(e)} className={styles.dropdown__item} data-category='all'>All Task</div>
                <div onClick={(e) => changeHandler(e)} className={styles.dropdown__item} data-category='done'>Done Task</div>
            </div>
        </motion.div>
    );
};

export default DropDown;