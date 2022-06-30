import React from 'react';

// Styles
import styles from './Task.module.css';

const Task = () => {
    return (
        <div className={styles.task}>
            <span className={styles.task__line}></span>
            <div className={styles.task__status}>
                <div className={`${styles.task__close} ${styles.ball}`}></div>
                <div className={`${styles.task__edit} ${styles.ball}`}></div>
                <div className={`${styles.task__done} ${styles.ball}`}></div>
            </div>
            <h4 className={styles.task__title}>this is test</h4>
            <p className={styles.task__content}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
                cum? Dignissimos quae vitae, corporis neque doloremque saepe,
                perferendis numquam expedita
            </p>
        </div>
    );
};

export default Task;