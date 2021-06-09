import React from 'react';
import { useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";
export default function Lyric({question, correct, incorrect, lyric}) {
   const dispatch = useDispatch()
   
    const divStyle = {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
    const questionStyle = {
        fontSize: '5em',
        width: '100%',
        fontWeight: 'bold'
    }
    const lyricStyle = {
        width: '80%',
        fontSize: '4em',
        fontStyle: 'italic',
        margin: '50px'
    }
    const answerStyle = {  
        width: '600px',
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
    return (
        <div style={divStyle}>
            <div style={questionStyle}>
                {question}
            </div>    
            <div style={lyricStyle}>
                "{lyric}"
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
}