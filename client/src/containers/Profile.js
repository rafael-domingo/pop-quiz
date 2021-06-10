import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setView } from "../redux/user";

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
        borderRadius: '24px'
    }
    const logoutButtonStyle = {
        fontSize: '2vw',
        padding: '10px',
        backgroundColor: '#1DB954',
        width: '20%',
        margin: '10px',      
        marginLeft: '10px',
        borderRadius: '24px'
    }
    if (state == 'Artists') {
        return (
            <div style={divStyle}>
            <div style={buttonStyle}>
            <div style={quizButtonStyle} onClick={() => {
                dispatch(setView('Home'))
            }}>Take the quiz again</div>
            <div style={logoutButtonStyle}>Logout of Spotify</div>
            </div>
            <div style={headerStyle}>
                Your Profile
            </div>
            <div style={selectedNavStyle}>
                Artists
            </div>
            <div style={navStyle} onClick={() => setState('Tracks')}>
                Tracks
            </div>
            <div style={listStyle}>
                {
                    artists.map((artist) => {
                        return (
                            <div style={itemStyle}>
                                <img style ={imgStyle} src={artist.images[0].url}/>
                                <p style={textStyle}>{artist.name}</p>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        )
    } else if (state == 'Tracks') {
        return (
            <div style={divStyle}>
                <div style={buttonStyle}>
                <div style={quizButtonStyle} onClick={() => {
                    dispatch(setView('Home'))
                }}>Take the quiz again</div>
                <div style={logoutButtonStyle}>Logout of Spotify</div>
                </div>
                <div style={headerStyle}>
                    Your Profile
                </div>
                <div style={navStyle} onClick={() => setState('Artists')}>
                    Artists
                </div>
                <div style={selectedNavStyle}>
                    Tracks
                </div>
                <div style={listStyle}>
                {
                    tracks.map((track) => {
                        return (
                            <div style={itemStyle}>
                                <img style ={imgStyle} src={track.album.images[0].url}/>
                                <p style={textStyle}>{track.name} by {track.artists[0].name}</p>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        )
    }
  
}