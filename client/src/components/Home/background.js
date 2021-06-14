import React from 'react';
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
export default function Background() {
    const newReleases = useSelector(state => state.user.newReleases)
    console.log(newReleases)
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '100%',
        width: '100%',
        overflow: 'hidden',
        opacity: '100%',
        position: 'absolute',
        zIndex: '-1'
    }

    const imgStyle = {
        width: '35vw',
        height: 'auto',
        padding: '50px',
        borderRadius: '10%'
    }

    // Framer motion parameters
    const variants = {
        hidden: {
            opacity: 0,
            y: '0vh',
            transition: {
                duration: 5,
                type: 'spring',
            }
        },
        show: {
            opacity: 1,
            y: ['-400vh', '-300vh', '-200vh', '-100vh', '0vh', '-50vh', '-150vh', '-250vh', '-350vh'],
            transition: {
                duration: 20,
                type: 'spring',
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
                
            }
        }
    }
    if (newReleases.length > 1) {
        return (
            <motion.div  style={divStyle}>
                {
                    newReleases.map((item) => {
                        return (
                            <motion.img variants={variants} initial="hidden" animate="show" exit="hidden" style={imgStyle} key={item.id} src={item.images[0].url} />
                        )
                    })
                }
            </motion.div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
    
}