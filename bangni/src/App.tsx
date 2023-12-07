// App.tsx
import React from 'react';
import './App.css';
import TaskScheduler from './TaskScheduler';
import Categories from './Categories';
import Suggestions from './Suggestions';

function App() {
  return (
    <div className="App">
      <Categories />
      <TaskScheduler />
      <Suggestions />
    </div>
  );
}

export default App;