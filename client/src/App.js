import logo from './logo.svg';
import './App.css';
import { Spotify } from '../src/util/Spotify';
import { Quiz } from '../src/util/Quiz';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setProfilePicture, setUsername, setTopArtists, setTopTracks, setTopLyrics, setQuiz, setNewReleases } from '../src/redux/user'
import Home from './containers/Home';
function App() {
  const dispatch = useDispatch();
  const authorization = useSelector(state => state.user.authorization);
  const artists = useSelector(state => state.user.topArtists);
  const tracks = useSelector(state => state.user.topTracks);
  const lyrics = useSelector(state => state.user.topLyrics);
  // Start populating Redux State if user has authorized Spotify 
  React.useEffect(() => {

    // If user has authorized, obtain access token from callback
    if (authorization) {
      var callback = window.location.hash.split('&')
      var token = callback[0].split('=')
      token = token[1]
      dispatch(setAccessToken(token))
      Spotify.getCredentials().then(response => {
        Spotify.getNewReleases(response.access_token).then(response => dispatch(setNewReleases(response)))
      })

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
        console.log(response.items)
        dispatch(setTopTracks(response.items))
        // Get Musix Id for Lyrics 
        Spotify.getMusixId(response.items).then(response => {
          // Get Lyrics
          Spotify.getMusixLyrics(response).then(response => dispatch(setTopLyrics(response)))
        })
      })
    }      
    console.log(authorization)

  }, [])

  // Generate quiz once artists, tracks, and lyrics are obtained
  if (artists.length > 1 && tracks.length > 1 && lyrics.length > 1) {
    const output = Quiz.generateQuiz(artists, tracks, lyrics)
    dispatch(setQuiz(output))
  }
 
  return (
    <div className="App">
      <Home/>
      <a
        className="App-link"
        href="http://localhost:5000/login"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
