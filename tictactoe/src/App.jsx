import React,{ useState } from "react";
import Board from './components/Board';

import { calculateWinner } from "./win";
import './Styles/root.scss';


const App  = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false); //if i write true here  then its start with 'x'
  
  const winner=calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${isXNext ? 'X' : 'O'}`;
  

  


  const handleSquareClick = position => {
    if (board[position]||winner) {    //if our board position is already exist or if we had our winner its simply return;
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });

    setIsXNext(prev => !prev);
  };
  return ( 
  <div className="app">
    <h1>TIC TAC TOE aka ZERO KAATA</h1>
    <h2>{message}</h2>
    <Board board={board} handleSquareClick={handleSquareClick}/>
    <h3>Sumit Bisht</h3>
    

  </div>
    
  );
  };
export default App;
