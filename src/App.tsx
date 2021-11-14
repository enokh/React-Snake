import React, { useState, useEffect } from 'react';
import Board from './Components/Board';

interface pixel {
  value: number;
  id: string;
}

interface momentum {
  direction: number
}
var direction = 1;

const App: React.FC<{}> = () => {
  const boardIntial: pixel[][] = []
  for (var x = 0; x < 16; x++) {
    boardIntial[x] = []
    for (var y = 0; y < 16; y++) {
      boardIntial[x][y] = { value: 0, id: ("" + x + "" + y) }
    }
  }
  const [board, setBoard] = useState(boardIntial)

  // create snake in array 
  const snake: number[][] = [[0, 5], [0, 4], [0, 3], [0, 2], [0, 1], [0, 0]]

  //game status
  let [status, setStatus] = useState("The game is running...");

  useEffect(() => {
    const update = setInterval(game, 100)
    return () => {
      clearInterval(update);
    }
  }, [] );

  
  const moveSnake = () => {
    //console.log(direction);
    let snakeClone: number[][] = []
    snake.forEach(cord => {
      snakeClone.push(cord.slice())
    })


    if (direction === 1) {
      if (snake[0][1] === 15) {
        snake[0][1] = 0;
      } else {
        snake[0][1] = snake[0][1] + 1;
      }
      for (let i = 1; i < snakeClone.length; i++) {
        snake[i] = snakeClone[i - 1]
      }
    } else if (direction === 2) {
      if (snake[0][0] === 15) {
        snake[0][0] = 0;
      } else {
        snake[0][0] = snake[0][0] + 1;
      }
      for (let i = 1; i < snakeClone.length; i++) {
        snake[i] = snakeClone[i - 1]
      }
    } else if (direction === 3) {
      if (snake[0][0] === 0) {
        snake[0][0] = 15;
      } else {
        snake[0][0] = snake[0][0] - 1;
      }
      for (let i = 1; i < snakeClone.length; i++) {
        snake[i] = snakeClone[i - 1]
      }
    } else if (direction === 4) {
      if (snake[0][1] === 0) {
        snake[0][1] = 15;
      } else {
        snake[0][1] = snake[0][1] - 1;
      }
      for (let i = 1; i < snakeClone.length; i++) {
        snake[i] = snakeClone[i - 1]
      }
    }
    wipe();
    updateBoard(snake);
  }

  const wipe = () => {
    for (var x = 0; x < 16; x++) {
      for (var y = 0; y < 16; y++) {
        board[x][y].value = 0
      }
    }
  }
  
  //updates the new possition of the snake on the grid
  const updateBoard = (s: number[][]) => {
    setBoard(board => {
      for (let i = 0; i < s.length; i++) {
        board[s[i][0]][s[i][1]].value = 1;
      }
      return [...board]
    });
  }

  // check collision 
  const checkLoss = (): boolean => {
    for (var x = 0; x < snake.length; x++) {
      for (var y = x + 1; y < snake.length; y++) {
        if (snake[x][0] === snake[y][0] && snake[x][1] === snake[y][1]) {
          return true
        }
      }
    }
    return false

  }
  //event 
  document.onkeydown = (e) => {
    if (e.key === "ArrowLeft") {
      if (direction === 1) {
        direction = 3
      } else if (direction === 2) {
        direction = 1
      } else if (direction === 3) {
        direction = 4
      } else if (direction === 4) {
        direction = 2
      }
    } else if (e.key === "ArrowRight") {
      if (direction === 1) {
        direction = 2
      } else if (direction === 2) {
        direction = 4
      } else if (direction === 3) {
        direction = 1
      } else if (direction === 4) {
        direction = 3
      }
    }
  }

  //generate food
  const generateFood = ()=>{
    
  }

  
  const game = ()=>{
    if (checkLoss()){
      setStatus("Game Over you lost!!!")
    }else{
      moveSnake();
    }
  }

  return (
    <div >
      <h1>Snake Game </h1>
      <div className="board">
        <Board board={board} />
      </div>
      <br/>
      {status}
    </div>
  );
}

export default App;
