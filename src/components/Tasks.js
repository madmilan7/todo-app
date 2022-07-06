import React, { useContext, useState } from 'react';

// Icons
import alltask from '../assets/icon/all-task.svg';

// Styles
import styles from './Tasks.module.css';

// Components
import Task from './Task';
import DropDown from './DropDown';

// Context
import { TaskContext } from '../context/TaskContextProvider';

// Animation
import { AnimatePresence } from 'framer-motion';

const Tasks = () => {

    const { tasks, doneTaskList } = useContext(TaskContext);
    const [all, setAll] = useState(true);

    const changeHandler = (event) => {
        if (event.target.dataset.category === 'all') {
            setAll(true);
        } else if (event.target.dataset.category === 'done') {
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
                <DropDown changeCategory={changeHandler} all={all} />
            </div>
            <div className={styles.tasks__container}>
                <AnimatePresence>
                    {
                        tasks.length !== 0 ? (
                            all === true ? (
                                tasks.map(task => (
                                    <Task
                                        key={task.id}
                                        id={task.id}
                                        isDone={task.isDone}
                                        topic={task.topic}
                                        content={task.content}
                                    />
                                ))
                            ) : (
                                doneTaskList.map(task => (
                                    <Task
                                        key={task.id}
                                        id={task.id}
                                        isDone={task.isDone}
                                        topic={task.topic}
                                        content={task.content}
                                    />
                                ))
                            )
                        ) : (
                            <h4 className={styles.nothing}>You dont have any task to do</h4>
                        )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Tasks;