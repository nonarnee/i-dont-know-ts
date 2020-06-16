import React from 'react';
import './App.css';
import Greeting from "./components/Greeting";

function App() {
  return (
    <div className="App">
      <Greeting person={'nonarnee'} age={28} />
    </div>
  );
}

export default App;
