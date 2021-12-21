import Cards from "../Cards";
import deck from "../deck";
export default function reducer(cardsState: Cards[], cardNumAction: number) {
    for (let i = 0; i <= cardNumAction; i++) {
        cardsState.push(deck[0]);
        deck.splice(0, 1);
    }
    return cardsState;
}
