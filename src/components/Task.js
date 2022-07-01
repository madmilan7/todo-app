import React from 'react';

// Styles
import styles from './Task.module.css';

const Task = ({ isDone, topic, content }) => {
    return (
        <div className={styles.task}>
            <span className={isDone ? `${styles.task__line} ${styles.done__true}` : `${styles.task__line} ${styles.done__false}`} ></span>
            <div className={styles.task__status}>
                <div className={`${styles.task__close} ${styles.ball}`}></div>
                <div className={`${styles.task__edit} ${styles.ball}`}></div>
                <div className={`${styles.task__done} ${styles.ball}`}></div>
            </div>
            <h4 className={styles.task__title}>{isDone === true ? <del>{topic}</del> : topic}</h4>
            <p className={styles.task__content}>
                {isDone === true ? <del>{content}</del> : content}
            </p>
        </div>
    );
};

export default Task;