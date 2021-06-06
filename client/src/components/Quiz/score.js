import React from 'react';
import { useSelector } from "react-redux";

export default function Score() {
    const correct = useSelector(state => state.user.correct)
    const answered = useSelector(state => state.user.answered)
    const divStyle = {
        color: '#979797',
        fontSize: '3em',
        margin: '50px'
    }
    return (
        <div style={divStyle}>
            SCORE: {correct}/{answered}
        </div>
    )
}