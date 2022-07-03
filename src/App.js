import React from 'react';

// Components
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import PopUp from './components/PopUp';

// Context
import TaskContextProvider from './context/TaskContextProvider';

function App() {

  return (
    <TaskContextProvider>
      <PopUp />
      <Header />
      <div className='container'>
        <AddTask />
        <Tasks />
      </div>
    </TaskContextProvider>
  );
}

export default App;
