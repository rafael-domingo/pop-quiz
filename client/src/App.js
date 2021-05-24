import logo from './logo.svg';
import './App.css';
import { Spotify } from '../src/util/Spotify';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setProfilePicture, setUsername, setTopArtists, setTopTracks } from '../src/redux/user'
function App() {
  const dispatch = useDispatch();
  const authorization = useSelector(state => state.user.authorization);
  const artists = useSelector(state => state.user.topArtists);
  React.useEffect(() => {

    // If user has authorized, obtain access token from callback
    if (authorization) {
      var callback = window.location.hash.split('&')
      var token = callback[0].split('=')
      token = token[1]
      dispatch(setAccessToken(token))
      // Get User profile info with access token
      Spotify.getUser(token).then(response => {
          dispatch(setUsername(response.display_name))
          dispatch(setProfilePicture(response.images[0].url))          
        })
      // Get Top Artists 
      Spotify.getTopArtists(token).then(response => {
        dispatch(setTopArtists(response.items))
      })
      // Get Top Tracks
      Spotify.getTopTracks(token).then(response => {
        dispatch(setTopTracks(response.items))
      })
      
    }      
    console.log(authorization)

  }, [])

  console.log(artists)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://localhost:5000/login"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
