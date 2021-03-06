import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setView } from '../redux/user';
import { Quiz } from '../util/Quiz';
import { setQuiz, resetQuiz } from '../redux/user';

import { AnimatePresence, motion } from "framer-motion";
export default function Loading() {
    const userName = useSelector(state => state.user.username)
    const profilePicture = useSelector(state => state.user.profilePicture)
    const artists = useSelector(state => state.user.topArtists);
    const tracks = useSelector(state => state.user.topTracks);
    const lyrics = useSelector(state => state.user.topLyrics);
    const dispatch = useDispatch()
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: 'white',
        height: '100%'
    }
    const profileStyle = {
        borderRadius: '50%',
        height: '150px',
        width: '150px',
        margin: '20px',
        marginBottom: '50px',
        marginTop: '50px'
    }
    const greetingStyle = {
        width: '100%',
        height: 'auto',
        fontSize: '5vw',
        fontWeight: 'bold',
        marginBottom: '50px'
    }

    const findingText = {
        width: '100%',
        fontSize: '3vw',
        fontWeight: 'bold',
        color: '#979797',
        lineHeight: '0'
    }
    const button = {
        backgroundColor: 'rgba(29, 185, 84, 1)',
        borderRadius: '24px',
        padding: '20px', 
        width: '35vw',
        height: 'auto',
        textAlign: 'center',
        color: 'white',
        cursor: 'pointer',
        marginTop: '50px'
    }

    // Framer motion parameters
    const list = {
        hidden: {
            opacity: 0,
            transition: {
                duration: 1
            }
        },
        show: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1,
                staggerChildren: 1,
                type: 'spring'
            }
        }
    } 
    
    const childVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 1,
            type: 'spring',
            }
        },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            type: 'spring',
            }
        }
    }

    // Generate quiz once artists, tracks, and lyrics are obtained
    if (artists.length > 1 && tracks.length > 1) {
        try {
            const output = Quiz.generateQuiz(artists, tracks, lyrics)
            dispatch(setQuiz(output))
            dispatch(resetQuiz())
        } catch (error) {
            console.log(error)
        }
       
    } 

    // Handle if there is no profile picture
    var profilePic = <motion.div style={profileStyle}></motion.div>
    if (profilePicture.length !== 0 && profilePicture !== null && profilePicture !== undefined) {
        profilePic = <motion.img variants={childVariants} src={profilePicture} style={profileStyle}/>
    } 
    
    if (userName.length > 1) {
        return (
            <AnimatePresence exitBeforeEnter>

            <motion.div 
                style={divStyle}
                variants={list}
                initial="hidden"
                animate="show"
                exit="hidden">
                {profilePic}
                <motion.div variants={childVariants} style={greetingStyle}>
                    one sec, {userName}
                </motion.div>
                <motion.div variants={childVariants} style={greetingStyle}>
                    we're analyzing your music
                </motion.div>
                {/* <motion.div variants={list} style={findingStyle} initial="hidden" animate="show"> */}
                    <motion.p variants={childVariants} style={findingText}>finding your top artists</motion.p>
                    <motion.p variants={childVariants} style={findingText}>finding your top tracks</motion.p>
                    <motion.p variants={childVariants} style={findingText}>obtaining lyrics</motion.p>
                    <motion.p variants={childVariants} style={findingText}>just a little bit longer</motion.p>
                    <motion.p variants={childVariants} style={findingText}>creating your quiz</motion.p>
                    <motion.p variants={childVariants} style={findingText}>ready?</motion.p>
                {/* </motion.div> */}
                <motion.div variants={childVariants} whileHover={{ scale: 1.2 }} whileTap={{scale: 0.8}} style={button} onClick={() => dispatch(setView('Quiz'))}>Let's Go</motion.div>
             
            </motion.div>
            </AnimatePresence>
        )
    } else {
        return (
            <div>

            </div>
        )
    }

}