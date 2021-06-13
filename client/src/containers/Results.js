import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setView } from '../redux/user';
import { motion, AnimatePresence } from "framer-motion";
export default function Results() {
    const correct = useSelector(state => state.user.correct)
    const answered = useSelector(state => state.user.answered)
    const dispatch = useDispatch()
    const percent = Math.floor(correct/answered*100)
    if (percent >= 90) {
        var response = 'Looks like you know your stuff!'
    } else if (percent >= 70) {
        var response = 'Not bad! Keep on rocking!'
    } else if (percent <= 50) {
        var response = `Sorry dawg, looks like you're not going to Hollywood.`
    } else {
        var response = `Music to my ears`
    }
    const divStyle = {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
    const responseStyle = {
        fontSize: '5vw',
        width: '100%',
        fontWeight: 'bold'
    }
    const scoreStyle = {
        fontSize: '4vw',
        width: '100%',
        color: '#979797'
    }
    const buttonStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap'
    }
    const quizButtonStyle = {
        fontSize: '2vw',
        padding: '10px',
        backgroundColor: '#1D9FB9',
        width: '35%',
        margin: '10px',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: '24px'
    }
    const logoutButtonStyle = {
        fontSize: '2vw',
        padding: '10px',
        backgroundColor: '#1DB954',
        width: '35%',
        margin: '10px',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: '24px'
    }
    const profileButtonStyle = {
        fontSize: '2vw',
        padding: '10px',
        backgroundColor: 'none',
        width: '35%',
        margin: '10px',
        marginLeft: '10%',
        marginRight: '10%',
        border: '1px solid white',
        borderRadius: '24px'
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
    return (
        <AnimatePresence exitBeforeEnter>            
        <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
            <div style={responseStyle}>
                {response}
            </div>
            <div style={scoreStyle}>
                {percent}%
            </div>
            <div style={buttonStyle}>
                <div style={quizButtonStyle} onClick={() => {
                    dispatch(setView('Home'))
                }}>Take the quiz again</div>
                <div style={logoutButtonStyle}>Logout of Spotify</div>
                <div style={profileButtonStyle} onClick={() => dispatch(setView('Profile'))}>Your Spotify Profile</div>
            </div>
        </motion.div>
        </AnimatePresence>

    )
}