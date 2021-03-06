import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setView } from "../redux/user";
import { motion, AnimatePresence } from "framer-motion";
export default function Profile()  {
    const artists = useSelector(state => state.user.topArtists)
    const tracks = useSelector(state => state.user.topTracks)
    const dispatch = useDispatch()
    const [state, setState] = React.useState('Artists')

    const divStyle = {
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
    const headerStyle = {
        width: '100%',
        fontSize: '10vw',
        fontWeight: 'bold'
    }
    const navStyle = {
        color: '#979797',
        cursor: 'pointer',
        fontSize: '4vw',
        fontWeight: 'bold',
        margin: '30px'
    }
    const selectedNavStyle = {
        color: '#1DB954',
        cursor: 'pointer',
        fontSize: '4vw',
        fontWeight: 'bold',
        margin: '30px'
    }
    const listStyle = {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
    const itemStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        // border: '2px solid #979797',
        borderRadius: '1vw',
        textAlign: 'center',
        width: '60vw',        
        margin: '1vw',
        color: '#979797',
        fontWeight: 'bold',
        fontSize: '2vw',
        
    }
    const imgStyle = {
        width: '10vw',
        height: '10vw',
        borderRadius: '1vw',
        marginRight: '5vw'
    }
    const textStyle = {
        textAlign: 'left',
        whiteSpace: 'nowrap',        
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
        width: '20%',
        margin: '10px',
        marginRight: '10px',      
        borderRadius: '24px',
        cursor: 'pointer'
    }
    const logoutButtonStyle = {
        fontSize: '2vw',
        padding: '10px',
        backgroundColor: '#1DB954',
        width: '20%',
        margin: '10px',      
        marginLeft: '10px',
        borderRadius: '24px',
        cursor: 'pointer'
    }

    // Framer motion parameters
    const variants = {
        hidden: {
            opacity: 0,
            x: '100vw',
            transition: {
                duration: 1, 
                type: 'spring'
            }
        },
        show: {
            opacity: 1,
            x: '0vw',
            transition: {
                duration: 1, 
                type: 'spring',
                ease: 'easeInOut'
            }
        },
        exit: {
            opacity: 1,
            x: '100vw',
            transition: {
                duration: 5,
                type: 'spring'
            }
        }
    }
    if (state === 'Artists') {
        return (
        <AnimatePresence exitBeforeEnter>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={divStyle}>
            <div style={buttonStyle}>
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} style={quizButtonStyle} onClick={() => {
                dispatch(setView('Loading'))
            }}>Take the quiz again</motion.div>
            <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} onClick={() => dispatch(setView('Home'))} style={logoutButtonStyle}>Logout of Spotify</motion.div>
            </div>
            <div style={headerStyle}>
                Your Profile
            </div>
            <div style={selectedNavStyle}>
                Artists
            </div>
            <motion.div style={navStyle} whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} onClick={() => setState('Tracks')}>
                Tracks
            </motion.div>
            <div style={listStyle}>
                {
                    artists.map((artist) => {
                        return (
                            <motion.div variants={variants} initial="hidden" animate="show" exit="exit" key={artist.id} style={itemStyle}>
                                <img alt="artist" style ={imgStyle} src={artist.images[0].url}/>
                                <p style={textStyle}>{artist.name}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
            </motion.div>
        </AnimatePresence>
        )
    } else if (state === 'Tracks') {
        return (
        <AnimatePresence exitBeforeEnter>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}} style={divStyle}>
                <div style={buttonStyle}>
                <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} style={quizButtonStyle} onClick={() => {
                    dispatch(setView('Loading'))
                }}>Take the quiz again</motion.div>
                <motion.div whileHover={{scale: 1.2}} whileTap={{scale: 0.8}} onClick={() => dispatch(setView('Home'))} style={logoutButtonStyle}>Logout of Spotify</motion.div>
                </div>
                <div style={headerStyle}>
                    Your Profile
                </div>
                <motion.div style={navStyle} whileHover={{scale: 1.2}} whileTap={{ scale: 0.8}} onClick={() => setState('Artists')}>
                    Artists
                </motion.div>
                <div style={selectedNavStyle}>
                    Tracks
                </div>
                <div style={listStyle}>
                {
                    tracks.map((track) => {
                        return (
                            <motion.div variants={variants} initial="hidden" animate="show" exit="exit" key={track.id} div style={itemStyle}>
                                <img alt="track" style ={imgStyle} src={track.album.images[0].url}/>
                                <p style={textStyle}>{track.name} by {track.artists[0].name}</p>
                            </motion.div>
                        )
                    })
                }
            </div>
            </motion.div>
        </AnimatePresence>
        )
    }
  
}