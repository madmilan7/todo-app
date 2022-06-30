import React from 'react';

// Icons
import tasks from '../assets/icon/all-task.svg';

// Styles
import styles from './Tasks.module.css';

// Components
import Task from './Task';

const Tasks = () => {
    return (
        <div className={styles.tasks}>
            <div className={styles.tasks__title}>
                <img src={tasks} alt='all-task' />
                <h2 className={styles.tasks__title__text}>All Tasks</h2>
            </div>
            <div className={styles.tasks__sort}>
                <select>
                    <option>All Tasks</option>
                    <option>Done Tasks</option>
                </select>
            </div>
            <div className={styles.tasks__container}>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
};

export default Tasks;