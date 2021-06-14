import React from 'react';
import { setView, setCorrect, setAnswered } from "../redux/user";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function Feedback({result}) {
    const dispatch = useDispatch()
    const correctDivStyle = {
        color: 'green',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100vw',
        height: 'auto',
        fontSize: '10vw',
        lineHeight: '0',
        marginTop: '20vh'
    }
    const incorrectDivStyle = {
        color: 'red',
        backgroundColor: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100vw',
        height: 'auto',
        fontSize: '10vw',
        lineHeight: '0',
        marginTop: '20vh'

    }
    const textStyle = {
        fontSize: '10vw',
        fontWeight: 'bold',
        width: '100%',
        marginTop: '10px'
    }
    var randomNum = Math.floor(Math.random() * 6)

    React.useEffect(() => {
        if (result === 'correct') {
            dispatch(setCorrect())
            dispatch(setAnswered())
        } else {
            dispatch(setAnswered())
        }         
        setTimeout(() => {
            dispatch(setView('Quiz'))
        }, 3000)
    })

    const incorrectLottie = [
        'https://assets9.lottiefiles.com/packages/lf20_fyqtse3p.json',
        'https://assets8.lottiefiles.com/packages/lf20_gBx1wY.json',
        'https://assets7.lottiefiles.com/private_files/lf30_itjoc71i.json',
        'https://assets2.lottiefiles.com/datafiles/VjQUAk8lvArxYIR/data.json',
        'https://assets2.lottiefiles.com/packages/lf20_3QexPM.json',
        'https://assets10.lottiefiles.com/packages/lf20_3wd4nehc.json'
    ]

    const correctLottie = [
        'https://assets5.lottiefiles.com/private_files/lf30_ejk7wwif.json',
        'https://assets4.lottiefiles.com/packages/lf20_Y8UeVt.json',
        'https://assets4.lottiefiles.com/packages/lf20_Y8UeVt.json',
        'https://assets3.lottiefiles.com/packages/lf20_4ll9qg6q.json',
        'https://assets7.lottiefiles.com/packages/lf20_kehwtvbf.json',
        'https://assets1.lottiefiles.com/private_files/lf30_3nhhhiz2.json',
    ]


    // Framer motion parameters
    const variants = {
        hidden: {
            opacity: 0, 

        },
        show: {
            opacity: 1
        }
    }
    if (result === 'correct') {
     
        return (
            <AnimatePresence exitBeforeEnter>
            <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={correctDivStyle}>
            <div style={{width: '50vw', height: '50vw'}}>
                <lottie-player
                autoplay
                loop
                mode="normal"
                src={correctLottie[randomNum]}  background="transparent"  speed="1" 
                >
                </lottie-player>
            </div>
                <div style={textStyle}>
                    Correct
                </div>
            </motion.div>
            </AnimatePresence>

        )
    } else {
        return (
            <AnimatePresence exitBeforeEnter>
            <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={incorrectDivStyle}>
            <div style={{width: '50vw', height: '50vw'}}>
                <lottie-player
                autoplay
                loop
                mode="normal"
                src={incorrectLottie[randomNum]}  background="transparent"  speed="1" 
                >
                </lottie-player>
                </div>
                <div style={textStyle}>
                    Incorrect
                </div>
            </motion.div>
            </AnimatePresence>

        )
    }
   
}