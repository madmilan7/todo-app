import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);
    const [popUp, setPopUp] = useState({ is: false, item: null });
    const [doneTaskList, setDoneTaskList] = useState([]);

    useEffect(() => {
        const allDoneTask = tasks.filter(task => task.isDone === true);
        setDoneTaskList(allDoneTask);
    }, [tasks]);

    const addTasks = (topic, content) => {
        const newTask = {
            id: uuid4(),
            isDone: false,
            topic,
            content
        }
        setTasks([...tasks, newTask]);
    }

    const deleteTask = (id) => {
        const newTask = tasks.filter(task => task.id !== id);
        setTasks(newTask);
    }

    const doneTask = (id) => {
        const newTask = [...tasks];
        const index = newTask.findIndex(task => task.id === id);
        newTask[index].isDone = !newTask[index].isDone;
        setTasks(newTask);
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
    }

    return (
        <TaskContext.Provider value={{ tasks, addTasks, deleteTask, doneTask, setId, popUp, editTask, doneTaskList }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;