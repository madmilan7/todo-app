import React, { useContext } from 'react';

// Styles
import styles from './Task.module.css';

// Context
import { TaskContext } from '../context/TaskContextProvider';

// Animation
import { motion } from 'framer-motion';

const Task = ({ isDone, topic, content, id }) => {

    const { deleteTask, doneTask, setId } = useContext(TaskContext);

    return (
        <motion.div
            className={styles.task}
            initial={{ x: '-100%', margin: 0, height: 0 }}
            animate={{ x: 0, height: '100px', marginTop: 25 }}
            exit={{
                x: '-100%',
                height: 0,
                marginTop: 0,
                padding: 0,
                opacity: 0,
                width: 0,
                transition: {
                    duration: 0.3,
                },
            }}
            transition={{
                type: 'spring',
                stiffness: 80,
                damping: 10,
            }}
        >
            <span className={isDone ? `${styles.task__line} ${styles.done__true}` : `${styles.task__line} ${styles.done__false}`} ></span>
            <div className={styles.task__status}>
                <motion.div whileTap={{ scale: 2 }} className={`${styles.task__close} ${styles.ball}`} onClick={() => deleteTask(id)}></motion.div>
                <motion.div whileTap={{ scale: 2 }} className={`${styles.task__edit} ${styles.ball}`} onClick={() => setId(id)}></motion.div>
                <motion.div whileTap={{ scale: 2 }} className={`${styles.task__done} ${styles.ball}`} onClick={() => doneTask(id)}></motion.div>
            </div>
            <h4 className={styles.task__title}>{isDone ? <del>{topic}</del> : topic}</h4>
            <p className={styles.task__content}>
                {isDone ? <del>{content}</del> : content}
            </p>
        </motion.div>
    );
};

export default Task;