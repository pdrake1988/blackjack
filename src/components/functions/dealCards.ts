import deck from "../deck";
import Cards from "../Cards";

export default function dealCards(index: number, hand: Cards[]) {
    for (let i = 1; i <= index; i++) {
        hand.push(deck[0]);
        deck.splice(0, 1);
    }
    return hand;
}
