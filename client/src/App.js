import './App.css';
import { Spotify } from '../src/util/Spotify';
import QuizGame from './containers/Quiz';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setAccessToken, setProfilePicture, setUsername, setTopArtists, setTopTracks, setTopLyrics, setView } from '../src/redux/user'
import Home from './containers/Home';
import Loading from './containers/Loading';
import Results from './containers/Results';
import Profile from './containers/Profile';
import Feedback from './containers/Feedback';
function App() {
  const dispatch = useDispatch();
  const authorization = useSelector(state => state.user.authorization);
 
  const view = useSelector(state => state.user.view)
  // Start populating Redux State if user has authorized Spotify 
  React.useEffect(() => {

    // If user has authorized, obtain access token from callback
    if (authorization) {
      dispatch(setView('Loading'))
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
        // Get Musix Id for Lyrics 
        Spotify.getMusixId(response.items).then(response => {
          // Get Lyrics
          Spotify.getMusixLyrics(response).then(response => dispatch(setTopLyrics(response))).catch((err) => console.log(err)) 
        }).catch((err) => console.log(err))
      })
    }      

  }, [authorization, dispatch])

  // Generate quiz once artists, tracks, and lyrics are obtained
  // if (artists.length > 1 && tracks.length > 1 && lyrics.length > 1) {
  //   const output = Quiz.generateQuiz(artists, tracks, lyrics)
  //   dispatch(setQuiz(output))
  // }
 
  if (view === 'Home') {
    return (
      <div className="App">
        <Home />
      </div>
    )    
  } else if (view === 'Loading') {
    return ( 
      <div className="App">
        <Loading />
      </div>
    )   
  } else if (view === 'Quiz')  {
    return (
      <div className="App">
        <QuizGame />
      </div>

    )
  } else if (view === 'Correct') {
    return (
      <div className="App">
        <Feedback result={'correct'} />
      </div>
    )
  } else if (view === 'Incorrect') {
    return (
      <div className="App">
        <Feedback result={'incorrect'} />
      </div>
    )
  } else if (view === 'Profile') {
    return (
      <div className="App">
        <Profile />
      </div>
    )
  }
  else {
    return (
      <div className="App">
        <Home/> 
        <Loading/>
        <QuizGame />
        <Results />
      </div>
    );
  }
 
}

export default App;
