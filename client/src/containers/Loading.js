import React from 'react';
import { useSelector } from "react-redux";

export default function Loading() {
    const userName = useSelector(state => state.user.username)
    const profilePicture = useSelector(state => state.user.profilePicture)
    const divStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: 'white',
        height: '100vh'
    }
    const profileStyle = {
        borderRadius: '50%',
        height: '150px',
        width: '150px',
    }
    const greetingStyle = {
        width: '100%',
        height: 'auto'
    }
    const findingStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: 'auto'
    }
    const findingText = {
        width: '100%'
    }
    if (userName.length > 1) {
        return (
            <div style={divStyle}>
                <img src={profilePicture} style={profileStyle}/>
                <div style={greetingStyle}>
                    one sec, {userName}
                </div>
                <div style={greetingStyle}>
                    we're analyzing your music
                </div>
                <div style={findingStyle}>
                    <p style={findingText}>finding your top artists</p>
                    <p style={findingText}>finding your top tracks</p>
                    <p style={findingText}>obtaining lyrics</p>
                    <p style={findingText}>just a little bit longer</p>
                    <p style={findingText}>creating your quiz</p>
                    <p style={findingText}>ready?</p>


                </div>

             
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }

}