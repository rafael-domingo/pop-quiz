import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'User',
    initialState: {
        username: {},
        profilePicture: {},          
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setProfilePicture: (state, action) => {
            state.profilePicture = action.payload
        }
    }
})

export const { setUsername, setProfilePicture } = userSlice.actions;
export default userSlice.reducer