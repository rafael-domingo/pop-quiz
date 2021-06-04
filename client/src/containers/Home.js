import React from 'react'
import Background from '../components/Home/background';

export default function Home() {
    const divStyle = {
        backgroundColor: 'black',
        color: 'white',
    }
    const headerStyle = {

    }
    const loginButton = {
        backgroundColor: 'rgba(29, 185, 84, 1)',
        borderRadius: '24px',
        padding: '20px', 
        width: '252px',
        height: '48px',
        textAlign: 'center'
    }
    
    return (
        <div style={divStyle}>
            <Background />
            <div style={headerStyle}>
                <h1>Pop Quiz</h1>
                <p>how well do you know your own music?</p>
                <span style={loginButton}>Login with Spotify</span>
            </div>
            
            
        </div>
    )
}