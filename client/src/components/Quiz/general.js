import React from 'react';
import Lyric from './lyric';
import Picture from './picture';
import Track from './track';
import { useSelector, useDispatch } from "react-redux";
import { setCorrect, setAnswered } from "../../redux/user";
import { AnimatePresence, motion } from "framer-motion";
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
        fontWeight: 'bold',
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
                <AnimatePresence exitBeforeEnter>
                <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
                    <motion.div variants={variants} initial="hidden" animate="show" exit="hidden"  style={questionStyle}>
                        {question.question}
                    </motion.div>    
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}} variants={variants} initial="hidden" animate="show" exit="hidden"  style={answerStyle} onClick={() => {
                        dispatch(setCorrect())
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={question.correctImage}/>
                        <p style={textStyle}>{question.correct}</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}} variants={variants} initial="hidden" animate="show" exit="hidden"  style={answerStyle} onClick={() => {
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={question.incorrectImage}/>
                        <p style={textStyle}>{question.incorrect}</p>
                    </motion.div>
                </motion.div>
                </AnimatePresence>

            )
        } else {
            return (
                <AnimatePresence exitBeforeEnter>
                <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
                    <motion.div variants={variants} initial="hidden" animate="show" exit="hidden"  style={questionStyle}>
                        {question.question}
                    </motion.div>    
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}}  variants={variants} initial="hidden" animate="show" exit="hidden"  style={answerStyle} onClick={() => {
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={question.incorrectImage}/>
                        <p style={textStyle}>{question.incorrect}</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}}  variants={variants} initial="hidden" animate="show" exit="hidden"  style={answerStyle} onClick={() => {
                        dispatch(setCorrect())
                        dispatch(setAnswered())
                    }}>
                        <img style={imgStyle} src={question.correctImage}/>
                        <p style={textStyle}>{question.correct}</p>
                    </motion.div>                   
                </motion.div>
                </AnimatePresence>

            )
        }
       
    } else if (question.category == 'track') {
        return (
            <AnimatePresence exitBeforeEnter>
            <motion.div variants={variants} initial="hidden" animate="show" exit="hidden"  style={divStyle}>
                <Track question={question.question} correct={question.correct} incorrect={question.incorrect} correctImage={question.correctImage} incorrectImage={question.incorrectImage} track={question.url} randomNum={randomNum} category={question.category}/>
            </motion.div>
            </AnimatePresence>

        )
    } else if (question.category == 'picture') {
        return (
            <AnimatePresence exitBeforeEnter>
            <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
                <Picture question={question.question} correct={question.correct} incorrect={question.incorrect} correctImage={question.correctImage} incorrectImage={question.incorrectImage} image={question.image} randomNum={randomNum} category={question.category}/>
            </motion.div>
            </AnimatePresence>

        )
    } else if (question.category == 'lyric') {
        return (
            <AnimatePresence exitBeforeEnter>
            <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
                <Lyric question={question.question} correct={question.correct} incorrect={question.incorrect} correctImage={question.correctImage} incorrectImage={question.incorrectImage} lyric={question.lyric} randomNum={randomNum} category={question.category}/>
            </motion.div>
            </AnimatePresence>

        )
    }
   
}