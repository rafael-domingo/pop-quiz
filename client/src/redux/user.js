import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        username: {},
        profilePicture: {},    
        authorization: window.location.href.includes('token'),  
        accessToken: {},    
        topArtists: {},
        topTracks: {},
        topLyrics: {},
        quiz: {},
        newReleases: {},
        correct: 0,
        answered: 0,
        view: 'Home'
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload
        },
        setAuthorization: (state) => {
            state.authorization = !state
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        },
        setTopArtists: (state, action) => {
            state.topArtists = action.payload
        },
        setTopTracks: (state, action) => {
            state.topTracks = action.payload
        },
        setTopLyrics: (state, action) => {
            state.topLyrics = action.payload
        },
        setQuiz: (state, action) => {
            state.quiz = action.payload
        },
        setNewReleases: (state, action) => {
            state.newReleases = action.payload
        },
        setCorrect: (state) => {
            state.correct++
        },
        setAnswered: (state) => {
            state.answered++
        },
        setView: (state, action) => {
            state.view = action.payload
        },
        resetQuiz: (state) => {
            state.correct = 0
            state.answered = 0
        }
    }
})

export const { setUsername, setProfilePicture, setAuthorization, setAccessToken, setTopArtists, setTopTracks, setTopLyrics, setQuiz, setNewReleases, setCorrect, setAnswered, setView, resetQuiz } = userSlice.actions;
export default userSlice.reducer