import React from 'react'
import Background from '../components/Home/background';
import { useDispatch } from "react-redux";
import { Spotify } from '../util/Spotify'
import { setNewReleases } from "../redux/user";
import { AnimatePresence, motion } from "framer-motion";
import fetch from 'node-fetch';
export default function Home() {

    const divStyle = {
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'white',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
    const headerStyle = {

    }
    const titleStyle = {
        fontSize: '10vw',
        lineHeight: '0'
    }
    const subtitleStyle = {
        fontSize: '3vw',
        color: '#979797'
    }
    const loginButton = {
        backgroundColor: 'rgba(29, 185, 84, 1)',
        borderRadius: '24px',
        padding: '20px', 
        width: '35vw',
        height: 'auto',
        textAlign: 'center',
        color: 'white',
    }
    const aStyle = {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
      
    }

    // Framer motion parameters
    const variants = {
        hidden: {
            opacity: 0,            
        },
        show: {
            opacity: 1
        }
    }

    const login = () => {
        return fetch('/login')
        .then(response => response.json())
        .then(data => {
            window.location.assign(data)
        })
    }

    const dispatch = useDispatch()
    React.useEffect(() => {
        Spotify.getCredentials().then(response => {
            Spotify.getNewReleases(response.access_token).then(response => dispatch(setNewReleases(response)))
          })
    })
    return (
        <AnimatePresence exitBeforeEnter>

        <motion.div variants={variants} initial="hidden" animate="show" exit="hidden" style={divStyle}>
            <Background/>
            <motion.div style={headerStyle}>
                <h1 style={titleStyle}>Pop Quiz</h1>
                <p style={subtitleStyle}>how well do you know your own music?</p>
                <span style={aStyle} onClick={() => login()}>
                    <motion.div 
                        style={loginButton}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{scale: 0.8}}>
                        Login with Spotify
                    </motion.div>
                </span>
            </motion.div>
            
            
        </motion.div>
        </AnimatePresence>

    )
}