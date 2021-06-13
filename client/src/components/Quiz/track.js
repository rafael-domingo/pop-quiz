import e from 'cors';
import React, { useState } from 'react';
import ReactHowler from 'react-howler';
import { useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";
import { AnimatePresence, motion } from 'framer-motion';
import Play from "../../assets/play.png";
import Pause from "../../assets/pause.png";
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
        width: '80vw',        
        margin: '3vw',
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
    const playbackStyle = {
        width: '10vw',
        height: '10vw',
        margin: '10vw',
        borderRadius: '50%',
        border: '3px solid white',
        padding: '5vw',
        cursor: 'pointer'
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
                type: 'tween', 
                ease: 'easeInOut'
            }
        }
    }
    const playVariants = {
        active: {
            opacity: [1, 1, 1, 1, 1, 1, 1],
            scale: [1, 1.2, 1, 0.8, 1, 1.2, 1, 0.8, 1],
            transition: {
                repeat: Infinity,
                duration: 2,
                ease: 'linear',
                
            }
        },
        hover: {
            opacity: 1
        },
        inactive: {
            opacity: 1,
        }
    }
        if (randomNum == 0) {
            return (
                <AnimatePresence exitBeforeEnter>

                <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
                    <div style={questionStyle}>
                        {question}
                    </div>    
                    <div style={playerStyle}>
                        <ReactHowler src={track} playing={playing} loop={true} format={['mp3', 'aac']}/>
                        <motion.img whileHover={{opacity: 1, scale: 1, rotate: 0}} animate={playing ? "active" : "inactive"} variants={playVariants} style={playbackStyle} src={playing ? Pause : Play} onClick={() => setPlaying(!playing)}/>
                    </div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}} style={answerStyle} onClick={() => {
                    dispatch(setCorrect())
                    dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={correctImage}/>
                        <p style={textStyle}>{correct}</p> 
                     </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}}  style={answerStyle} onClick={() => {
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={incorrectImage}/>
                        <p style={textStyle}>{incorrect}</p> 
                    </motion.div>
                    
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
                        <motion.img whileHover={{opacity: 1, scale: 1, rotate: 0}} animate={playing ? "active" : "inactive"} variants={playVariants} style={playbackStyle} src={playing ? Pause : Play} onClick={() => setPlaying(!playing)}/>
                    </div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}}  style={answerStyle} onClick={() => {
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={incorrectImage}/>
                        <p style={textStyle}>{incorrect}</p> 
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}}  style={answerStyle} onClick={() => {
                    dispatch(setCorrect())
                    dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={correctImage}/>
                        <p style={textStyle}>{correct}</p> 
                     </motion.div>
                   
                    
                </motion.div>
                </AnimatePresence>

            )
        }

    
}