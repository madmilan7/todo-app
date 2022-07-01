import React, { useContext } from 'react';
import { v4 as uuid4 } from 'uuid';

// Icons
import alltask from '../assets/icon/all-task.svg';

// Styles
import styles from './Tasks.module.css';

// Components
import Task from './Task';

// Context
import { TaskContext } from '../context/TaskContextProvider';

const Tasks = () => {

    const { tasks } = useContext(TaskContext);

    return (
        <div className={styles.tasks}>
            <div className={styles.tasks__title}>
                <img src={alltask} alt='all-task' />
                <h2 className={styles.tasks__title__text}>All Tasks</h2>
            </div>
            <div className={styles.tasks__sort}>
                <select>
                    <option>All Tasks</option>
                    <option>Done Tasks</option>
                </select>
            </div>
            <div className={styles.tasks__container}>
                {
                    tasks.map(task => (
                        <Task
                            key={uuid4()}
                            isDone={task.isDone}
                            topic={task.topic}
                            content={task.content}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Tasks;