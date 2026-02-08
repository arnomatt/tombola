import { Explosion } from "../../assets/Explosion"
import './Score.css'

interface ScoreProps {
    score: string;
}

export const Score = (props: ScoreProps) => {
    return (
        <div className='scoreContainer'>
            <p>&nbsp;Score:&nbsp;</p>
            <div className='score'>
                <Explosion key={props.score} />
                <div>{props.score}</div>
            </div>
        </div>
    )
}