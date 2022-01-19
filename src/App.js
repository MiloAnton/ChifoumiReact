import { useState } from 'react';
import './App.css';
import Button from './components/Button';

export default function App() {
  const [scoreH, setScoreH] = useState(0);
  const [scoreC, setScoreC] = useState(0);
  
  function resetScore() {
    setScoreC(scoreC - scoreC);
    setScoreH(scoreH - scoreH);
  }
  
  function playGame(played) {
    const possible = ['👊', '👋', '✌️'];
    let random = Math.floor(Math.random() * possible.length);
    console.log(random);
    if (random == played) {
    } else if (random == 0 && played == 1) {
        setScoreH(scoreH + 1);
    } else if (random == 0 && played == 2) {
        setScoreC(scoreC + 1);
    } else if (random == 1 && played == 0) {
        setScoreC(scoreC + 1);
    } else if (random == 1 && played == 2) {
        setScoreH(scoreH + 1);
    } else if (random == 2 && played == 1) {
        setScoreC(scoreC + 1);
    } else if (random == 2 && played == 0) {
        setScoreH(scoreH + 1);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
          <div>
            {scoreC} 💻 Scoreboard 👶 {scoreH}
          </div>
          <Button value={'👊'} onClick={() => playGame(0)}/>
          <Button value={'👋'} onClick={() => playGame(1)}/>
          <Button value={'✌️'} onClick={() => playGame(2)}/>
          <Button value={'🔄'} onClick={() => resetScore()}/>
      </header>
    </div>
  );
}