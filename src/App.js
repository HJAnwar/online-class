import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './conponent/Header/Header';
import Courses from './conponent/Courses/Courses';


function App() {
  return (
    <div className="App">
     <Header></Header>
     <Courses></Courses>
    </div>
  );
}

export default App;
