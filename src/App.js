import React from 'react';

// Components
import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
