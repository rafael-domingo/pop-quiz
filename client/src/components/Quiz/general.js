import React from 'react';
import Lyric from './lyric';
import Picture from './picture';
import Track from './track';
import { useSelector, useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";
export default function General({index}) {
   const question = useSelector(state => state.user.quiz[index])
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
    if (question.category == 'general') {
        return (
            <div style={divStyle}>
                <div style={questionStyle}>
                    {question.question}
                </div>    
                <div style={answerStyle} onClick={() => {
                    dispatch(setCorrect())
                    dispatch(setAnswered())
                }}>
                    {question.correct}
                </div>
                <div style={answerStyle} onClick={() => {
                    dispatch(setAnswered())
                }}>
                    {question.incorrect}
                </div>
            </div>
        )
    } else if (question.category == 'track') {
        return (
            <div style={divStyle}>
                <Track question={question.question} correct={question.correct} incorrect={question.incorrect} track={question.url} category={question.category}/>
            </div>
        )
    } else if (question.category == 'picture') {
        return (
            <div style={divStyle}>
                <Picture question={question.question} correct={question.correct} incorrect={question.incorrect} image={question.image} category={question.category}/>
            </div>
        )
    } else if (question.category == 'lyric') {
        return (
            <div style={divStyle}>
                <Lyric question={question.question} correct={question.correct} incorrect={question.incorrect} lyric={question.lyric} category={question.category}/>
            </div>
        )
    }
   
}