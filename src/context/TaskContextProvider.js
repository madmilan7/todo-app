import React, { createContext, useState } from 'react';
import { v4 as uuid4 } from 'uuid';

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

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

    return (
        <TaskContext.Provider value={{ tasks, addTasks, deleteTask, doneTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;