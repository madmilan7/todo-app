import React from 'react';

// Components
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

// Context
import TaskContextProvider from './context/TaskContextProvider';

function App() {

  return (
    <TaskContextProvider>
      <Header />
      <div className='container'>
        <AddTask />
        <Tasks />
      </div>
    </TaskContextProvider>
  );
}

export default App;
