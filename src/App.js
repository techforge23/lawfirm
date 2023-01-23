import React from 'react'
import './App.css';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header/>
      {<HelloWorld name='Dalton'/>}
    </div>
  );
}

export default App;
