import React from 'react';

// Icons
import addtask from '../assets/icon/add-task.svg';

// Styles
import styles from './AddTask.module.css';

const AddTask = () => {
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
                />
                <textarea
                    className={styles.addtaskInputs__content}
                    type="text"
                    placeholder='more info about task'
                />
                <button className={styles.addtaskInputs__btn}>Create New Task</button>
            </div>
        </div>
    );
};

export default AddTask;