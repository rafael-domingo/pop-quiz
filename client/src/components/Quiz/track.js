import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import { useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";

export default function Track({question, correct, incorrect, track}) {
    const dispatch = useDispatch()
    
    const [initialize, setInitialize] = useState(false)
    const [playing, setPlaying] = useState(false)
    const divStyle = {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
    const questionStyle = {
        fontSize: '5vw',
        width: '100%',
        height: 'auto',
        fontWeight: 'bold'
    }
    const playerStyle = {
        width: '100%'
    }
    const answerStyle = {  
        width: '50vw',
        height: '200px',
        margin: '50px',
        border: '2px solid #979797',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#979797',
        fontSize: '2em'
    }
    if (initialize) {
        return (
            <div style={divStyle}>
                <div style={questionStyle}>
                    {question}
                </div>    
                <div style={playerStyle}>
                    <ReactHowler src={track} playing={playing} loop={true} format={['mp3', 'aac']}/>
                    <button onClick={() => setPlaying(true)}>Play</button>
                    <button onClick={() => setPlaying(false)}>Pause</button>
                </div>
                <div style={answerStyle} onClick={() => {
                dispatch(setCorrect())
                dispatch(setAnswered())
                }}>
                    {correct}
                 </div>
                <div style={answerStyle} onClick={() => {
                    dispatch(setAnswered())
                }}>
                    {incorrect}
                </div>
                
            </div>
        )
    } else {
        return (
            <div style={divStyle}>
                <button onClick={() => setInitialize(true)}>Initialize Me</button>
            </div>
        )
    }
    
}