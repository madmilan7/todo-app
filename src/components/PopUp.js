import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

// Context
import { TaskContext } from '../context/TaskContextProvider';

// Styles 
import styles from './PopUp.module.css';

const PopUp = () => {

    const { popUp, setPopUp, editTask } = useContext(TaskContext);
    const [text, setText] = useState({ topic: '', content: '' });

    const submitHandler = (isOk) => {
        if (isOk === true) {
            editTask(text);
            toast.success('Task was successfully edited');
        }
        setPopUp({ is: false, item: null });
        setText({ topic: '', content: '' });
    };

    const topicHandler = (event) => {
        setText({ ...text, topic: event.target.value });
    }

    const contentHandler = (event) => {
        setText({ ...text, content: event.target.value });
    }

    return (
        <div className={popUp.is === false ? `${styles.popUp}` : `${styles.popUp} ${styles.popUp__show}`}>
            <h4 className={styles.popUp__title}>you are editing: </h4>
            <input
                className={styles.popUp__topic}
                type="text"
                maxLength={50}
                value={text.topic}
                onChange={topicHandler}
                placeholder={popUp.item !== null ? 'you editing' + popUp.item.topic : 'nothing'}
            />
            <textarea
                value={text.content}
                maxLength={75}
                onChange={contentHandler}
                placeholder="edit content..."
                className={styles.popUp__content}
            />
            <div className={styles.popUp__buttons}>
                <button
                    className={`${styles.popUp__button} ${styles.confirm}`}
                    onClick={() => submitHandler(true)}>
                    Confirm
                </button>
                <button
                    className={`${styles.popUp__button} ${styles.cancel}`}
                    onClick={() => submitHandler(false)}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default PopUp;