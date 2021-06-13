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
        flexWrap: 'wrap',
        marginTop: '10vw'
    }
    const responseStyle = {
        fontSize: '10vw',
        width: '100%',
        fontWeight: 'bold'
    }
    const scoreStyle = {
        fontSize: '20vw',
        width: '100%',
        color: '#979797',
        marginTop: '10vw'
    }
    const buttonStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '5vw'
    }
    const quizButtonStyle = {
        fontSize: '4vw',
        padding: '10px',
        backgroundColor: '#1D9FB9',
        width: '50vw',
        margin: '10px',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: '24px'
    }
    const logoutButtonStyle = {
        fontSize: '4vw',
        padding: '10px',
        backgroundColor: '#1DB954',
        width: '50vw',
        margin: '10px',
        marginLeft: '10%',
        marginRight: '10%',
        borderRadius: '24px'
    }
    const profileButtonStyle = {
        fontSize: '4vw',
        padding: '10px',
        backgroundColor: 'none',
        width: '50vw',
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
                    dispatch(setView('Loading'))
                }}>Take the quiz again</div>
                <div onClick={() => dispatch(setView('Home'))} style={logoutButtonStyle}>Logout of Spotify</div>
                <div style={profileButtonStyle} onClick={() => dispatch(setView('Profile'))}>Your Spotify Profile</div>
            </div>
        </motion.div>
        </AnimatePresence>

    )
}