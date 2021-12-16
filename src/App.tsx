import React, {useEffect} from 'react';
import shuffle from './components/functions/shuffle';
import deck from "./components/deck";
import CurrentPlayer from "./components/CurrentPlayer";
import dealCards from "./components/functions/dealCards";
import Cards from "./components/Cards";

function App() {
    document.body.classList.add('bg-secondary', 'text-white');
    let dealerHand: Cards[] = [];
    let playerHand: Cards[] = [];
    useEffect(() => {
        shuffle(deck);
        dealCards(2, dealerHand);
        dealCards(2, playerHand);
    });
  return (
    <div className={'container'}>
        <CurrentPlayer hand={playerHand}/>
    </div>
  );
}

export default App;
