import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

// Context
import { TaskContext } from '../context/TaskContextProvider';

// Styles 
import styles from './PopUp.module.css';

const PopUp = () => {

    const [text, setText] = useState({ topic: '', content: '' });
    const { popUp, setPopUp, editTask } = useContext(TaskContext);

    const submitHandler = (event, isOk) => {
        event.preventDefault();
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
        <div className={popUp.is ? `${styles.popUp} ${styles.popUp__show}` : `${styles.popUp}`}>
            <h4 className={styles.popUp__title}>you are editing: </h4>
            <form onSubmit={(event) => submitHandler(event, true)}>
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
                        type="submit"
                        className={`${styles.popUp__button} ${styles.confirm}`}>
                        Confirm
                    </button>
                    <button
                        type="submit"
                        className={`${styles.popUp__button} ${styles.cancel}`}
                        onClick={(event) => submitHandler(event, false)}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PopUp;