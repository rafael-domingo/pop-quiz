import React from 'react';
import { useSelector } from "react-redux";
import AnimatedNumber from 'react-animated-numbers';

export default function Score() {
    const correct = useSelector(state => state.user.correct)
    const answered = useSelector(state => state.user.answered)
    const divStyle = {
        color: '#979797',
        fontSize: '5vw',
        margin: '50px',
        width: '100vw',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={divStyle}>
            SCORE: <AnimatedNumber delay={1000} animationType="calm" animateToNumber={correct}/>/<AnimatedNumber delay={1000} animationType="random" animateToNumber={answered}/>
        </div>
    )
}