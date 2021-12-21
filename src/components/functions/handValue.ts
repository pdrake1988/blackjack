import Cards from "../Cards";

export default function handValue(hand: Cards[]) {
    let handValue = 0;
    for (let i = 0; i < hand.length; i++) {
        handValue += hand[i].value;
    }
    return handValue;
}
