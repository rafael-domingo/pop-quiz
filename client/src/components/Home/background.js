import React from 'react';
import { useSelector } from "react-redux";

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
        overflow: 'hidden',
        zIndex: '-1'
    }

    const imgStyle = {
        width: '35vw',
        height: 'auto',
        padding: '50px',
        borderRadius: '10%'
    }
    if (newReleases.length > 1) {
        return (
            <div style={divStyle}>
                {
                    newReleases.map((item) => {
                        return (
                            <img style={imgStyle} src={item.images[0].url} />
                        )
                    })
                }
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
    
}