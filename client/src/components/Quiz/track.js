import e from 'cors';
import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import { useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";
import { AnimatePresence, motion } from 'framer-motion';

export default function Track({question, correct, incorrect, track, randomNum, correctImage, incorrectImage}) {
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
    if (initialize) {
        if (randomNum == 0) {
            return (
                <AnimatePresence exitBeforeEnter>

                <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
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
                        <img style={imgStyle} src={correctImage}/>
                        <p style={textStyle}>{correct}</p> 
                     </div>
                    <div style={answerStyle} onClick={() => {
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={incorrectImage}/>
                        <p style={textStyle}>{incorrect}</p> 
                    </div>
                    
                </motion.div>
                </AnimatePresence>

            )
        } else {
            return (
                <AnimatePresence exitBeforeEnter>

                <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
                    <div style={questionStyle}>
                        {question}
                    </div>    
                    <div style={playerStyle}>
                        <ReactHowler src={track} playing={playing} loop={true} format={['mp3', 'aac']}/>
                        <button onClick={() => setPlaying(true)}>Play</button>
                        <button onClick={() => setPlaying(false)}>Pause</button>
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
                   
                    
                </motion.div>
                </AnimatePresence>

            )
        }
       
    } else {
        return (
            <div style={divStyle}>
                <button onClick={() => setInitialize(true)}>Initialize Me</button>
            </div>
        )
    }
    
}