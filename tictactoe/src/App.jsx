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
    <h1>TIC TAC TOE <span className="text-green">aka</span> ZERO KAATA</h1>
    <StatusMessage winner={winner} current={current}/>
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares}/>
    <button type="button" onClick={onNewgame} className={`btn-reset ${winner ? 'active' : ''}`}>START NEW GAME</button>
    <h3 style={{fontWeight:"bold"}}>CURRENT GAME HISTORY</h3>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    
    <a href="https://www.linkedin.com/in/sumit-bisht-ab4051226/
" target="_blank">Developed by :  <em>SUMIT BISHT</em></a>
<div className="bg-balls"/>
    

  </div>
    
  );
  };
export default App;
