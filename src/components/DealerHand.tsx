import React from "react";
import Cards from "./Cards";

interface Params {
    hand: Cards[];
    isPlayerWinner: boolean;
    isDealerWinner: boolean;
}
export default function DealerHand(props: Params) {
    console.log(props.hand);
    if(props.hand.length === 0) {
        return null;
    }
    return(
        <div className={'d-flex justify-content-center'}>
            <div>
                <img className={(!props.isPlayerWinner && !props.isDealerWinner)  ? 'img-fluid' : 'd-none'}
                     src={'/pictures/9169ef73b3564976a7dc564d66861027--playing-cards-art-bicycles.jpg'} alt={'Card Back'}/>
                <img className={props.isPlayerWinner || props.isDealerWinner ? 'img-fluid' : 'd-none'}
                     src={props.hand[0].image} alt={'Card Face'}/>
                <h1 className={'text-center'}>Hole Card</h1>
            </div>
        {props.hand.map((card, index: number) => {
            return(
                <div key={index}>
                    <img className={index === 0 ? 'd-none' : 'img-fluid'} src={card.image} alt={'Card Face'}/>
                    <h1 className={index === 0 ? 'd-none' : 'text-center'}>{card.name}</h1>
                </div>
            )
        })}
        </div>
    )
}
