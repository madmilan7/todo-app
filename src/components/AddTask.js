import React, { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Icons
import addtask from '../assets/icon/add-task.svg';

// Styles
import styles from './AddTask.module.css';

// Context
import { TaskContext } from '../context/TaskContextProvider';

// Animation
import { motion } from 'framer-motion';

const AddTask = () => {

    const { addTasks } = useContext(TaskContext);
    const [text, setText] = useState({ topic: '', content: '' });

    const topicHandler = (event) => {
        setText({ ...text, topic: event.target.value });
    }

    const contentHandler = (event) => {
        setText({ ...text, content: event.target.value });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setText({ topic: '', content: '' });
        if (text.topic.trim() !== '' && text.content.trim() !== '') {
            addTasks(text.topic, text.content);
        } else {
            errorMessage();
        }
    }

    const errorMessage = () => {
        toast.error('Please fill the fallowing form');
    }

    return (
        <div className={styles.addtask}>
            <ToastContainer />
            <div className={styles.addtaskTitle}>
                <img
                    className={styles.addtaskTitle__icon}
                    src={addtask}
                    alt="addTask"
                />
                <h2 className={styles.addtaskTitle__text}>Make New Task</h2>
            </div>
            <form onSubmit={submitHandler} className={styles.addtaskInputs}>
                <p className={styles.addtask__inputCount}>{text.topic.length}/50</p>
                <input
                    maxLength={50}
                    className={styles.addtaskInputs__name}
                    type="text"
                    placeholder='your task topic'
                    onChange={topicHandler}
                    value={text.topic}
                />
                <p className={styles.addtask__inputCount}>{text.content.length}/75</p>
                <textarea
                    maxLength={75}
                    className={styles.addtaskInputs__content}
                    type="text"
                    placeholder='more info about task'
                    onChange={contentHandler}
                    value={text.content}
                />
                <motion.button
                    className={styles.addtaskInputs__btn}
                    type="submit"
                    whileTap={{ scale: 0.9 }}
                >
                    Create New Task
                </motion.button>
            </form>
        </div>
    );
};

export default AddTask;