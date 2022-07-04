import React, { useContext } from 'react';

// Context 
import { TaskContext } from '../context/TaskContextProvider';

// Styles
import styles from './OverLay.module.css';

const OverLay = ({ children }) => {

    const { popUp } = useContext(TaskContext);

    return (
        <div className={popUp.is ? `${styles.overlay} ${styles.overlay__show}` : `${styles.overlay}`}>
            {children}
        </div>
    );
};

export default OverLay;