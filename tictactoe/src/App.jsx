import React,{ useState } from "react";
import Board from './components/Board';
import History from './components/History';

import { calculateWinner } from "./win";
import './Styles/root.scss';


const App  = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  

  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (current.board[position] || winner) {      //if our board position is already exist or if we had our winner its simply return;
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };

  const moveTo = (move) =>{
        setCurrentMove(move);
  }

  return ( 
  <div className="app">
    <h1>TIC TAC TOE aka ZERO KAATA</h1>
    <h2>{message}</h2>
    <Board board={current.board} handleSquareClick={handleSquareClick}/>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    <h3>Sumit Bisht</h3>
    

  </div>
    
  );
  };
export default App;
