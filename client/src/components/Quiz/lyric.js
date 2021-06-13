import React from 'react';
import { useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";
export default function Lyric({question, correct, incorrect, lyric, randomNum, correctImage, incorrectImage}) {
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
    const lyricStyle = {
        width: '80%',
        fontSize: '5vw',
        fontStyle: 'italic',
        margin: '50px'
    }
    const answerStyle = {  
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: '2px solid #979797',
        borderRadius: '1vw',
        textAlign: 'center',
        width: '80vw',        
        margin: '1vw',
        color: '#979797',
        fontWeight: 'bold',
        fontSize: '3vw',
        cursor: 'pointer'
    }
    const imgStyle = {
        width: '20vw',
        height: '20vw',
        borderRadius: '1vw',
        marginRight: '5vw'
    }
    const textStyle = {
        textAlign: 'left'
    }
    if (randomNum == 0) {
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
                    <img style={imgStyle} src={correctImage}/>
                    <p style={textStyle}>{correct}</p> 
                </div>
                <div style={answerStyle} onClick={() => {
                    dispatch(setAnswered())
                }}>
                    <img style={imgStyle} src={incorrectImage}/>
                    <p style={textStyle}>{incorrect}</p> 
                </div>
            </div>
        )
    } else {
        return (
            <div style={divStyle}>
                <div style={questionStyle}>
                    {question}
                </div>    
                <div style={lyricStyle}>
                    "{lyric}"
                </div>
                <div style={answerStyle} onClick={() => {
                    dispatch(setAnswered())
                }}>
                    <img style={imgStyle} src={incorrectImage}/>
                    <p style={textStyle}>{incorrect}</p> 
                </div>
                <div style={answerStyle} onClick={() => {
                    dispatch(setCorrect())
                    dispatch(setAnswered())
                }}>
                    <img style={imgStyle} src={correctImage}/>
                    <p style={textStyle}>{correct}</p> 
                </div>
             
            </div>
        )
    }
    
}