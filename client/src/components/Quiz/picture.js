import React from 'react';
import { useDispatch } from "react-redux";
import { setView } from "../../redux/user";
import { motion } from "framer-motion";
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
        width: '60vw',
        height: '15vw',
        margin: '3vw',
        border: '2px solid #979797',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#979797',
        fontSize: '3vw',
        fontWeight: 'bold',
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
               <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}} style={answerStyle} onClick={() => {
                    dispatch(setView('Correct'))
                }}>
                    {correct}
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}} style={answerStyle} onClick={() => {
                    dispatch(setView('Incorrect'))
                }}>
                    {incorrect}
                </motion.div>
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
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}} style={answerStyle} onClick={() => {
                    dispatch(setView('Incorrect'))
                }}>
                    {incorrect}
                </motion.div>
               <motion.div whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}} style={answerStyle} onClick={() => {
                    dispatch(setView('Correct'))
                }}>
                    {correct}
                </motion.div>
             
            </div>
        )
    }
 
}