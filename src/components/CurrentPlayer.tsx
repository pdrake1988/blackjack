import React from "react";
import Cards from "./Cards";
interface Params {
    hand: Cards[];
}
export default function CurrentPlayer(props: Params) {
    console.log(props.hand);
    return(
        <React.Fragment>
            <div className={'d-flex flex-row flex-nowrap justify-content-center'}>
                {props.hand.map((card) => {
                    return(
                        <div>
                            <img className={'img-fluid'} src={`${card.image}`} alt={'Card Face'}/>
                            <h1 className={'text-center'}>{card.name}</h1>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}
