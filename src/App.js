import './App.css';
import { useState } from "react";
import Board from './components/Board';

const App = () => {
  const [history, setHistory] = useState([new Array(9).fill(null)]);
  const [isXTurn, setIsXTurn] = useState(true);
  const [step, setStep] = useState(0);

  const current = history[step];

  let status = null;

  const isEndGame = () => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < wins.length; ++i) {
      const [a, b, c] = [...wins[i]];
      if (current[a] !== null && current[a] === current[b] && current[a] === current[c]) {
        return current[a];
      }
    }

    return null;
  }

  const winner = isEndGame();
  status = winner != null ? `${winner} 승리!` : `이번 차례 : ${isXTurn ? "X" : "O"}`;

  const onSquareClickCallback = (i) => {
    const temp = current.slice();
    if (isEndGame() === null && temp[i] === null) {
      temp[i] = isXTurn ? "X" : "O";
      const newHistory = history.slice(0, step + 1);
      const temp1 = [...newHistory, temp];
      console.log(temp1);
      setHistory(temp1);
      setIsXTurn(prev => !prev);
      setStep(newHistory.length);
    }
  }

  const historyInfo = history.map((value, index) => {
    const text = index > 0 ? `${index} 로 이동` : "처음으로 이동";
    return (
      <li key={index}>
        <button className="history-button" onClick={() => { rewind(index); }}>{text}</button>
      </li>);
  });

  const rewind = (index) => {
    setStep(index);
    setIsXTurn(index % 2 === 0);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board current={current} onSquareClickCallback={(i) => {
          onSquareClickCallback(i);
        }} />
      </div>
      <div className="game-info">
        <div className="status">{status}</div>
        <ol className="history-info">{
          historyInfo}
        </ol>
      </div>
    </div>
  );
}

export default App;
