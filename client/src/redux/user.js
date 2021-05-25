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
        topLyrics: {}
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
        }
    }
})

export const { setUsername, setProfilePicture, setAuthorization, setAccessToken, setTopArtists, setTopTracks, setTopLyrics } = userSlice.actions;
export default userSlice.reducer