import React from 'react'
import Background from '../components/Home/background';
import { useDispatch } from "react-redux";
import { Spotify } from '../util/Spotify'
import { setNewReleases } from "../redux/user";
import { motion } from "framer-motion";
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
        justifyContent: 'center'
    }
    const dispatch = useDispatch()
    React.useEffect(() => {
        Spotify.getCredentials().then(response => {
            Spotify.getNewReleases(response.access_token).then(response => dispatch(setNewReleases(response)))
          })
    })
    return (
        <div style={divStyle}>
            <Background/>
            <div style={headerStyle}>
                <h1 style={titleStyle}>Pop Quiz</h1>
                <p style={subtitleStyle}>how well do you know your own music?</p>
                <a style={aStyle} href="http://localhost:5000/login">
                    <motion.div 
                        style={loginButton}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{scale: 0.8}}>
                        Login with Spotify
                    </motion.div>
                </a>
            </div>
            
            
        </div>
    )
}