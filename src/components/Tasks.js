import React, { useContext, useState } from 'react';

// Icons
import alltask from '../assets/icon/all-task.svg';

// Styles
import styles from './Tasks.module.css';

// Components
import Task from './Task';

// Context
import { TaskContext } from '../context/TaskContextProvider';

const Tasks = () => {

    const { tasks, doneTaskList } = useContext(TaskContext);
    const [all, setAll] = useState(true);

    const selectHandler = (event) => {
        if (event.target.value === 'all') {
            setAll(true);
        } else if (event.target.value === 'done') {
            setAll(false);
        }
    }

    return (
        <div className={styles.tasks}>
            <div className={styles.tasks__title}>
                <img src={alltask} alt='all-task' />
                <h2 className={styles.tasks__title__text}>All Tasks</h2>
            </div>
            <div className={styles.tasks__sort}>
                <select onClick={selectHandler}>
                    <option value='all'>All Tasks</option>
                    <option value='done'>Done Tasks</option>
                </select>
            </div>
            <div className={styles.tasks__container}>
                {
                    all ?
                        tasks.map(task => (
                            <Task
                                key={task.id}
                                id={task.id}
                                isDone={task.isDone}
                                topic={task.topic}
                                content={task.content}
                            />
                        )) :
                        doneTaskList.map(task => (
                            <Task
                                key={task.id}
                                id={task.id}
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