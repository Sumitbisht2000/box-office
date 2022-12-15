import React from 'react'

const StatusMessage  = ({winner,current}) => {
    // const message = winner
    // ? `Winner is ${winner}`
    // : `Next player is ${current.isXNext ? 'X' : 'O'}`;
    const noMovesLeft = current.board.every(el => el !== null);

    return (
      <div>
        {winner && (
          <>
          <strong>Winner is</strong>{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'} >
            {winner}
          </span>
          </>
        )}
        {!winner &&
          !noMovesLeft &&
          <>
          Next player is<span className={current.isXNext  ? 'text-green' : 'text-orange'}>{current.isXNext ? 'X' : 'O'}</span>
          </>}
        {!winner && noMovesLeft && <em>'YOUR <span className='text-green'>MATCH</span> IS <span className='text-orange'>DRAW'</span></em>}
      </div>
    );
  };

export default  StatusMessage;