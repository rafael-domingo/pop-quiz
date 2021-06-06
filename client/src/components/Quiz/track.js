import React, { useState } from 'react';
import ReactHowler from 'react-howler';

export default function Track({question, correct, incorrect, track}) {
    const [initialize, setInitialize] = useState(false)
    const [playing, setPlaying] = useState(false)
    const divStyle = {
        color: 'white'
    }
    const questionStyle = {
        
    }
    const answerStyle = {

    }
    if (initialize) {
        return (
            <div style={divStyle}>
                <div style={questionStyle}>
                    {question}
                </div>    
                <div>
                    <ReactHowler src={track} playing={playing} loop={true} format={['mp3', 'aac']}/>
                </div>
                <div style={answerStyle}>
                    {correct}
                </div>
                <div style={answerStyle}>
                    {incorrect}
                </div>
                <button onClick={() => setPlaying(true)}>Play</button>
                <button onClick={() => setPlaying(false)}>Pause</button>
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