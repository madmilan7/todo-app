import React from 'react';

// Icon
import main from '../assets/icon/main.svg';

// Styles
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.header__icon} src={main} alt='todo-app' />
            <h1 className={styles.header__title}>Todo App</h1>
        </header>
    );
};

export default Header;