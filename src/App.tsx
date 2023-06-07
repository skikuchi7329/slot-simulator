import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let result = "";
    const rondom = () => {
    let ransuu = Math.floor(Math.random() * 65536 + 1)
      if (1 <= ransuu || 19023 >= ransuu) {
        result = "ぶどう";
      }
    }
  return (
    <>
      <button></button>
    </>
  );
}

export default App;
