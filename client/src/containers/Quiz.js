import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import { useSelector } from "react-redux";
import General from '../components/Quiz/general';
import Score from '../components/Quiz/score';
import Results from './Results';
import Error from './Error';
export default function Quiz() {
    const quiz = useSelector(state => state.user.quiz)
    const answered = useSelector(state => state.user.answered)
    
    const divStyle = {
        color: 'white'
        
    }
    const variants = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 1
            }
        },
        show: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    }
    if (quiz.length > 1 && answered <= quiz.length - 1) {
        return (
            <AnimatePresence exitBeforeEnter>
            <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>           
                <Score />
                <General index={answered} key={answered}/>
            </motion.div>
            </AnimatePresence>
        )
    } else if (quiz.length === 0 || quiz === undefined) {
        return (
            <AnimatePresence exitBeforeEnter>
            <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
                <Error/>
            </motion.div>
            </AnimatePresence>
        )
    } else {
        return (
            <AnimatePresence exitBeforeEnter>
            <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
                <Results/>
            </motion.div>
            </AnimatePresence>
        )        
    }
   
}