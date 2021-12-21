import {Card} from "react-bootstrap";

interface Params {
    playerHandValue: number;
    isDealerWinner: boolean;
    isPlayerWinner: boolean;
    isDealerOver21: boolean;
    isPlayerOver21: boolean;
}
export default function BoardState(props: Params) {
    function bgColor(isDealerWinner: boolean, isPlayerWinner: boolean,
                     isDealerOver21: boolean, isPlayerOver21: boolean) {
        if (isDealerWinner || isPlayerOver21) {
            return 'bg-danger';
        } else if (isPlayerWinner || isDealerOver21) {
            return 'bg-success';
        } else {
            return 'bg-primary';
        }
    }
    return(
        <div className={'d-flex justify-content-center'}>
            <Card className={bgColor(props.isDealerWinner, props.isPlayerWinner,
                props.isDealerOver21, props.isPlayerOver21)}>
                <Card.Body>
                    <Card.Text className={props.isDealerWinner || props.isPlayerOver21 ? 'text-center' :
                        'd-none'}>Sorry You lose</Card.Text>
                    <Card.Text className={props.isPlayerWinner || props.isDealerOver21 ? 'text-center' :
                        'd-none'}>You Win</Card.Text>
                    <Card.Text className={(props.isDealerWinner) || (props.isPlayerWinner)
                        || (props.isPlayerOver21) || (props.isDealerOver21) ? 'd-none' : 'text-center'}
                    >The value of the player's hand is {props.playerHandValue}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
