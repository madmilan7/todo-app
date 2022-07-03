import React, { useContext, useState } from 'react';

// Context
import { TaskContext } from '../context/TaskContextProvider';

// Styles 
import styles from './PopUp.module.css';

const PopUp = () => {

    const { popUp, setPopUp, editTask } = useContext(TaskContext);
    const [text, setText] = useState("");

    const submitHandler = (isOk) => {
        if (isOk) {
            editTask(text);
        }
        setPopUp({ is: false, id: null });
        setText("");
    }

    const changeHandler = (event) => {
        setText(event.target.value);
    }

    return (
        <div className={popUp.is === false ? `${styles.popUp}` : `${styles.popUp} ${styles.popUp__show}`}>
            <h4 className={styles.popUp__title}>you are editing: </h4>
            <input className={styles.popUp__topic} type="text" value={text} onChange={changeHandler} />
            <div className={styles.popUp__buttons}>
                <button
                    className={`${styles.popUp__button} ${styles.confirm}`}
                    onClick={submitHandler(true)}>
                    Confirm
                </button>
                <button
                    className={`${styles.popUp__button} ${styles.cancel}`}
                    onClick={submitHandler(false)}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default PopUp;