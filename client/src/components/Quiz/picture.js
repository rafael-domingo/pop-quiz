import React from 'react';
import { useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";

export default function Picture({question, correct, incorrect, image, randomNum}) {
    const dispatch = useDispatch()

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
        width: '30vw',
        height: 'auto',
        borderRadius: '50%'
    }
    const answerStyle = {  
        width: '80vw',
        height: '15vw',
        margin: '5vw',
        border: '2px solid #979797',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#979797',
        fontSize: '5vw',
        padding: '3vw',
        cursor: 'pointer'
    }
    if (randomNum == 0) {
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
    } else {
        return (
            <div style={divStyle}>
                <div style={questionStyle}>
                    {question}
                </div>    
                <div style={imgDivStyle}>
                    <img style={imgStyle} src={image} />
                </div>
                <div style={answerStyle} onClick={() => {
                    dispatch(setAnswered())
                }}>
                    {incorrect}
                </div>
               <div style={answerStyle} onClick={() => {
                    dispatch(setCorrect())
                    dispatch(setAnswered())
                }}>
                    {correct}
                </div>
             
            </div>
        )
    }
 
}