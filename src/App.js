import React from 'react';
import './App.css';
import Welcome from "./components/welcome/Welcome";
import Sections from "./components/section/Section";

function App(props) {
  return (
   <div>
        <Welcome name = 'pavel antonov' profession = 'web developer'/>
        <Sections state = {props.state} dispatch = {props.dispatch}/>
   </div>
  );
}

export default App;
