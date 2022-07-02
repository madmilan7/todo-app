import React, { useContext } from 'react';

// Styles
import styles from './Task.module.css';

// Context
import { TaskContext } from '../context/TaskContextProvider';

const Task = ({ isDone, topic, content, id }) => {

    const { deleteTask, doneTask } = useContext(TaskContext);

    return (
        <div className={styles.task}>
            <span className={isDone ? `${styles.task__line} ${styles.done__true}` : `${styles.task__line} ${styles.done__false}`} ></span>
            <div className={styles.task__status}>
                <div className={`${styles.task__close} ${styles.ball}`} onClick={() => deleteTask(id)}></div>
                <div className={`${styles.task__edit} ${styles.ball}`}></div>
                <div className={`${styles.task__done} ${styles.ball}`} onClick={() => doneTask(id)}></div>
            </div>
            <h4 className={styles.task__title}>{isDone ? <del>{topic}</del> : topic}</h4>
            <p className={styles.task__content}>
                {isDone ? <del>{content}</del> : content}
            </p>
        </div>
    );
};

export default Task;