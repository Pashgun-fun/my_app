import React from 'react';
import './App.css';
import Welcome from "./components/welcome/Welcome";
import Sections from "./components/section/Section";

function App() {
  return (
   <div>
        <Welcome name = 'pavel antonov' profession = 'web developer'/>
        <Sections />
   </div>
  );
}

export default App;
