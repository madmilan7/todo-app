import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState(
        !localStorage.getItem('tasks')
            ? localStorage.setItem('tasks', JSON.stringify([]))
            : []
    );
    const [popUp, setPopUp] = useState({ is: false, item: null });
    const [doneTaskList, setDoneTaskList] = useState([]);

    useEffect(() => {
        const allDoneTask = tasks.filter(task => task.isDone === true);
        setDoneTaskList(allDoneTask);
    }, [tasks]);

    const addTasks = (topic, content) => {
        const oldTask = JSON.parse(localStorage.getItem('tasks'));
        const newTask = {
            id: uuid4(),
            isDone: false,
            topic,
            content
        }
        localStorage.setItem('tasks', JSON.stringify([newTask, ...oldTask]));
        setTasks([...tasks, newTask]);
    }

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }, []);

    const deleteTask = (id) => {
        const newTask = tasks.filter(task => task.id !== id);
        setTasks(newTask);
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const doneTask = (id) => {
        const newTask = [...tasks];
        const index = newTask.findIndex(task => task.id === id);
        newTask[index].isDone = !newTask[index].isDone;
        setTasks(newTask);
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    const setId = (id) => {
        const index = tasks.findIndex(task => task.id === id);
        setPopUp({ is: !popUp.is, item: tasks[index] });
    }

    const editTask = (text) => {
        const newTask = [...tasks];
        const index = newTask.findIndex(task => task.id === popUp.item.id);
        newTask[index].topic = text;
        setTasks(newTask);
        localStorage.setItem('tasks', JSON.stringify(newTask));
    }

    return (
        <TaskContext.Provider value={{ tasks, addTasks, deleteTask, doneTask, setId, popUp, editTask, doneTaskList }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;