import React from 'react';
import { useSelector } from "react-redux";

export default function Background() {
    const newReleases = useSelector(state => state.user.newReleases)
    console.log(newReleases)
    const divStyle = {
        
    }
    if (newReleases.length > 1) {
        return (
            <div style={divStyle}>
                {
                    newReleases.map((item) => {
                        return (
                            <img src={item.images[0].url} />
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