import React from "react";
import Cards from "./Cards";
import {Button} from "react-bootstrap";

interface Params {
    dealerHand: Cards[];
    playerHand: Cards[];
    dealerHandValue: number;
    playerHandValue: number;
    takeHit(cardNum: number): void;
    stand(cardNum: number): void;
}
export default function CurrentPlayer(props: Params) {
    console.log(props.playerHand);
    return(
        <footer>
            <div className={'d-flex justify-content-center'}>
                {props.playerHand.map((card: Cards, index: number) => {
                    return(
                        <div key={index}>
                            <img className={'img-fluid'} src={card.image} alt={'Card Face'}/>
                            <h1>{card.name}</h1>
                        </div>
                    )
                })}
            </div>
            <div className={'d-flex justify-content-center'}>
                <Button variant={'danger'} onClick={() => props.stand(1)}>Stand</Button>
                <Button variant={'success'} onClick={() => props.takeHit(1)}>Hit</Button>
            </div>
        </footer>
    )
}
