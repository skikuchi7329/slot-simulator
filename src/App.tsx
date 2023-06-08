import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let totalCoins = 0;
    const random = () => {
    const ransuu = Math.floor(Math.random() * 65536 + 1)
      if (1 <= ransuu && 255 >= ransuu) {
        totalCoins = totalCoins + 252;
        //BB
      } else if ( 256 <= ransuu && 511 >= ransuu ){
        totalCoins = totalCoins + 96;
        //RB
      } else if ( 512 <= ransuu && 2592 >= ransuu){
        totalCoins = totalCoins + 2;
        //cherry
      } else if ( 2593 <= ransuu && 11571 >= ransuu){
        totalCoins = totalCoins + 3;
        //replay
      } else if ( 11572 <= ransuu && 22871 >= ransuu ) {
        totalCoins = totalCoins + 8;
        //budou
      } else {
        totalCoins = totalCoins + 0;
        //hazure
      } 
      return totalCoins;
    }
  return (
    <>
      <button onClick={random}>スタート</button>
      <div>{totalCoins}</div>
    </>
  );
}

export default App;
