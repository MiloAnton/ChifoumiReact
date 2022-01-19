import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [scoreH, setScoreH] = useState(0);
  const [scoreC, setScoreC] = useState(0);
  const notifyW = () => toast.success("Yes yes 1 pt for you...", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  const notifyL = () => toast.error("computer === better", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
  const notifyE = () => toast("Human <3 Computer", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });


  function resetScore() {
    setScoreC(scoreC - scoreC);
    setScoreH(scoreH - scoreH);
  }
  
  function playGame(played) {
    const possible = ['👊', '👋', '✌️'];
    let random = Math.floor(Math.random() * possible.length);
    console.log(random);
    if (random == played) {
      notifyE();
    } else if (random == 0 && played == 1) {
      notifyW();
      setScoreH(scoreH + 1);
    } else if (random == 0 && played == 2) {
      notifyL();
      setScoreC(scoreC + 1);
    } else if (random == 1 && played == 0) {
      notifyL();
      setScoreC(scoreC + 1);
    } else if (random == 1 && played == 2) {
      notifyW();
      setScoreH(scoreH + 1);
    } else if (random == 2 && played == 1) {
      notifyL();
      setScoreC(scoreC + 1);
    } else if (random == 2 && played == 0) {
      notifyW();
      setScoreH(scoreH + 1);
    }
  }

  return (
    <div className="App">
      <ToastContainer
            toastStyle={{ backgroundColor: '#36494c', color : 'white' }}
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
      <div className="Scoreboard">
        {scoreC} &nbsp;💻 &nbsp;&nbsp;&nbsp;&nbsp;Scoreboard&nbsp;&nbsp;&nbsp;&nbsp; 👶 &nbsp;{scoreH}
      </div>
      <header className="App-header">
        <div>
          <Button value={'👊'} onClick={() => playGame(0)}/>
          <Button value={'👋'} onClick={() => playGame(1)}/>
          <Button value={'✌️'} onClick={() => playGame(2)}/>
          <Button value={'🔄'} onClick={() => resetScore()}/>
        </div>
      </header>
    </div>
  );
}