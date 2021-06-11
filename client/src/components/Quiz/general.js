import React from 'react';
import Lyric from './lyric';
import Picture from './picture';
import Track from './track';
import { useSelector, useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";
import { motion } from "framer-motion";
export default function General({index}) {
   const question = useSelector(state => state.user.quiz[index])
   const dispatch = useDispatch()
   const randomNum = Math.floor(Math.random() * 2)

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
    const answerStyle = {  
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        border: '2px solid #979797',
        borderRadius: '1vw',
        textAlign: 'center',
        width: '60vw',        
        margin: '1vw',
        color: '#979797',
        fontWeight: 'bold',
        fontSize: '3vw',
    }
    const imgStyle = {
        width: '10vw',
        height: '10vw',
        borderRadius: '1vw',
        marginRight: '5vw'
    }
    const textStyle = {
        textAlign: 'left'
    }

    // Framer motion parameters
    const variants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 1, 
                type: 'spring'
            }
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1, 
                type: 'spring', 
                ease: 'easeInOut'
            }
        }
    }
    if (question.category == 'general') {
        if (randomNum == 0) {
            return (
                <motion.div variants={variants} initial="hidden" animate="show" style={divStyle}>
                    <div style={questionStyle}>
                        {question.question}
                    </div>    
                    <div style={answerStyle} onClick={() => {
                        dispatch(setCorrect())
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={question.correctImage}/>
                        <p style={textStyle}>{question.correct}</p>
                    </div>
                    <div style={answerStyle} onClick={() => {
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={question.incorrectImage}/>
                        <p style={textStyle}>{question.incorrect}</p>
                    </div>
                </motion.div>
            )
        } else {
            return (
                <motion.div variants={variants} initial="hidden" animate="show" style={divStyle}>
                    <div style={questionStyle}>
                        {question.question}
                    </div>    
                    <div style={answerStyle} onClick={() => {
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={question.incorrectImage}/>
                        <p style={textStyle}>{question.incorrect}</p>
                    </div>
                    <div style={answerStyle} onClick={() => {
                        dispatch(setCorrect())
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={question.correctImage}/>
                        <p style={textStyle}>{question.correct}</p>
                    </div>                   
                </motion.div>
            )
        }
       
    } else if (question.category == 'track') {
        return (
            <div style={divStyle}>
                <Track question={question.question} correct={question.correct} incorrect={question.incorrect} correctImage={question.correctImage} incorrectImage={question.incorrectImage} track={question.url} randomNum={randomNum} category={question.category}/>
            </div>
        )
    } else if (question.category == 'picture') {
        return (
            <div style={divStyle}>
                <Picture question={question.question} correct={question.correct} incorrect={question.incorrect} correctImage={question.correctImage} incorrectImage={question.incorrectImage} image={question.image} randomNum={randomNum} category={question.category}/>
            </div>
        )
    } else if (question.category == 'lyric') {
        return (
            <div style={divStyle}>
                <Lyric question={question.question} correct={question.correct} incorrect={question.incorrect} correctImage={question.correctImage} incorrectImage={question.incorrectImage} lyric={question.lyric} randomNum={randomNum} category={question.category}/>
            </div>
        )
    }
   
}