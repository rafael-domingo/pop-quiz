import React from 'react';
import { useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";

export default function Picture({question, correct, incorrect, image}) {
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
    const imgDivStyle = {
        width: '100%',
        margin: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    const imgStyle = {
        width: '300px',
        height: '300px',
        borderRadius: '50%'
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
            <div style={imgDivStyle}>
                <img style={imgStyle} src={image} />
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