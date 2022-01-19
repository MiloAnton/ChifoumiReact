import './App.css';
import Button from './components/Button';
import Scoreboard from './components/scoreboard';

let scoreHuman = 0;
let scoreCPU = 0;

export default function App() {
  const signes = ['👊', '👋', '✌️'];
  return (
    <div className="App">
      <div>
        <Scoreboard />
      </div>
      <header className="App-header">
          <Button value={'👊'} onClick={() => playGame(0)}/>
          <Button value={'👋'} onClick={() => playGame(1)}/>
          <Button value={'✌️'} onClick={() => playGame(2)}/>
          <Button value={'🔄'} onClick={() => resetScore()}/>
      </header>
    </div>
  );
}

function resetScore() {
  scoreHuman=0;
  scoreCPU=0;
  Scoreboard(scoreHuman, scoreCPU)
}

function playGame(played) {
  const possible = ['👊', '👋', '✌️'];
  let random = Math.floor(Math.random() * possible.length);
  console.log(random);
  if (random == played) {
      //window.alert("Pffff égalité...");
  } else if (random == 0 && played == 1) {
      scoreHuman++;
      //window.alert("You win, bravo le papier");
  } else if (random == 0 && played == 2) {
      scoreCPU++;
      //window.alert("You don't win, pas bravo les ciseaux");
  } else if (random == 1 && played == 0) {
      scoreCPU++;
      //window.alert("You are vraiment pas bon, dommage le fist");
  } else if (random == 1 && played == 2) {
      scoreHuman++;
      //window.alert("Wow t'es fort tagagné, bien les ciseaux");
  } else if (random == 2 && played == 1) {
      scoreCPU++;
      //window.alert("Bof/20... Papier pas solide");
  } else if (random == 2 && played == 0) {
      scoreHuman++;
      //window.alert("Tagagné, tétrofor, comme ta main serrée");
  }
  Scoreboard(scoreHuman, scoreCPU)
}