import React,{ useState } from "react";
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';

import { calculateWinner } from "./win";
import './Styles/root.scss';

const NEW_GAME = [
  { board: Array(9).fill(null), isXNext: true },
];
const App  = () => {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  

  const {winner,winningSquares} = calculateWinner(current.board);
  

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
  };

  const onNewgame = ()=>{
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }


  return ( 
  <div className="app">
    <h1>TIC TAC TOE aka ZERO KAATA</h1>
    <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
    <button type="button" onClick={onNewgame}>START NEW GAME</button>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    <a href="https://www.linkedin.com/in/sumit-bisht-ab4051226/
" target="_blank"><em>SUMIT BISHT</em></a>
    

  </div>
    
  );
  };
export default App;
