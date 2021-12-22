import Cards from "../Cards";
import deck from "../deck";
export default function reducer(cardsState: Cards[], cardNumAction: number) {
    const newHand = [...cardsState];
    for (let i = 0; i < cardNumAction; i++) {
        newHand.push(deck[0]);
        deck.splice(0, 1);
    }
    console.log({newHand})
    return newHand;
}
