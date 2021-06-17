import React from 'react';
import { useDispatch } from 'react-redux';
import { setView } from '../redux/user';
import { motion, AnimatePresence } from "framer-motion";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function Error() {
    
    const dispatch = useDispatch()
   

    const divStyle = {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginTop: '10vw'
    }
    const responseStyle = {
        fontSize: '6vw',
        width: '80%',
        fontWeight: 'bold'
    }
 
    const buttonStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '5vw'
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
            <div style={{width: '50vw', height: '50vw'}}>
                <lottie-player
                autoplay
                loop
                mode="normal"
                src='https://assets2.lottiefiles.com/temp/lf20_QYm9j9.json'  background="transparent"  speed="1" 
                >
                </lottie-player>
            </div>
            <div style={responseStyle}>
                Uh oh, looks like we're having some technical difficulties. 
                <br></br>
                <br></br>
                Please try again later. 
            </div>               
            <div style={buttonStyle}>                 
                <div onClick={() => dispatch(setView('Home'))} style={logoutButtonStyle}>Logout of Spotify</div>
            </div>
        </motion.div>
        </AnimatePresence>
    )
 
   
}