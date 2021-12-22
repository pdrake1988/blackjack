import React, {useEffect, useReducer} from 'react';
import shuffle from './components/functions/shuffle';
import deck from "./components/deck";
import CurrentPlayer from "./components/CurrentPlayer";
import DealerHand from './components/DealerHand';
import {Button} from "react-bootstrap";
import BoardState from "./components/BoardState";
import handValue from "./components/functions/handValue";
import reducer from "./components/functions/reducer";
import Cards from "./components/Cards";

function App() {
    document.body.classList.add('bg-secondary', 'text-white');
    shuffle(deck);
    const [dealerHand, setDealerHand] = useReducer(reducer, Array<Cards>());
    const [playerHand, setPlayerHand] = useReducer(reducer, Array<Cards>());
    let dealerHandValue = handValue(dealerHand);
    let playerHandValue = handValue(playerHand);
    let isDealerOver21 = dealerHandValue > 21;
    let isPlayerOver21 = playerHandValue > 21;
    let isDealerWinner = (dealerHandValue > playerHandValue || dealerHandValue === 21) &&
        (dealerHandValue > 17);
    let isPlayerWinner = (playerHandValue > dealerHandValue || playerHandValue === 21) &&
        (dealerHandValue > 17);
    useEffect(() => {
        setDealerHand(2);
        setPlayerHand(2);
    }, []);
    return (
    <React.Fragment>
        <header className={'d-flex flex-row justify-content-center'}>
            <h1>Blackjack</h1>
            <Button variant={'primary'} href={'https://pdrake.me'}>Home Page</Button>
        </header>
        <DealerHand isDealerWinner={isDealerWinner} isPlayerWinner={isPlayerWinner} hand={dealerHand}/>
        <h1 className={'text-center'}>Dealer Hand</h1>
        <BoardState isPlayerWinner={isPlayerWinner} isDealerWinner={isDealerWinner} playerHandValue={playerHandValue}
                    isDealerOver21={isDealerOver21} isPlayerOver21={isPlayerOver21}/>
        <CurrentPlayer dealerHandValue={dealerHandValue} playerHandValue={playerHandValue}
                       dealerHand={dealerHand} playerHand={playerHand}
                       takeHit={(cardNum: number) => setPlayerHand(cardNum)}
                       stand={(cardNum: number) => setDealerHand(cardNum)}/>

    </React.Fragment>
  );
}

export default App;
