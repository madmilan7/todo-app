import React, { useContext, useState } from 'react';

// Icons
import addtask from '../assets/icon/add-task.svg';

// Styles
import styles from './AddTask.module.css';

// Context
import { TaskContext } from '../context/TaskContextProvider';

const AddTask = () => {

    const { addTasks } = useContext(TaskContext);
    const [text, setText] = useState({ topic: '', content: '' });

    const topicHandler = (event) => {
        setText({ ...text, topic: event.target.value });
    }

    const contentHandler = (event) => {
        setText({ ...text, content: event.target.value });
    }

    const submitHandler = () => {
        setText({ topic: '', content: '' });
        addTasks(text.topic, text.content);
    }

    return (
        <div className={styles.addtask}>
            <div className={styles.addtaskTitle}>
                <img
                    className={styles.addtaskTitle__icon}
                    src={addtask}
                    alt="addTask"
                />
                <h2 className={styles.addtaskTitle__text}>Make New Task</h2>
            </div>
            <div className={styles.addtaskInputs}>
                <input
                    className={styles.addtaskInputs__name}
                    type="text"
                    placeholder='your task topic'
                    onChange={topicHandler}
                    value={text.topic}
                />
                <textarea
                    className={styles.addtaskInputs__content}
                    type="text"
                    placeholder='more info about task'
                    onChange={contentHandler}
                    value={text.content}
                />
                <button className={styles.addtaskInputs__btn} onClick={submitHandler}>Create New Task</button>
            </div>
        </div>
    );
};

export default AddTask;