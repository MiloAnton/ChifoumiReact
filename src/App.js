import './App.css';
import Button from './components/Button';

function App() {
  const signes = ['👊', '👋', '✌️'];
  return (
    <div className="App">
      <header className="App-header">
          <Button value={'👊'} onClick={() => playGame(0)}/>
          <Button value={'👋'} onClick={() => playGame(1)}/>
          <Button value={'✌️'} onClick={() => playGame(2)}/>
      </header>
    </div>
  );
}
export default App;

function playGame(played) {
  const possible = ['👊', '👋', '✌️'];
  let random = Math.floor(Math.random() * possible.length);
  console.log(random);
  if (random == played ) {
    window.alert("Square game...");
  } else if ( random == 0 && played == 1) { 
    window.alert("You win, bravo le papier");
  } else if ( random == 0 && played == 2) {
    window.alert("You don't win, pas bravo les ciseaux");
  } else if ( random == 1 && played == 0) {
    window.alert("You are vraiment pas bon, dommage le fist");
  } else if ( random == 1 && played == 2) {
    window.alert("Wow t'es fort tagagné, bien les ciseaux");
  } else if ( random == 2 && played == 1) {
    window.alert("Bof/20... Papier pas solide");
  } else if ( random == 2 && played == 0) {
    window.alert("Tagagné, tétrofor, comme ta main serrée");
  } 
}