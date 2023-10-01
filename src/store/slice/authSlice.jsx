import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticated: false,
    userDetails: {
        username : "",
        displayName: "",
        role:""
    },
    permission: [] 
}

export const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            console.log(">>>> user login ", action.payload)
            console.log("before log in >>>> ", state)
            console.log(">>>> user login(username) ", action.payload.username)
            console.log(">>>> user login(role) ", action.payload.role)

            state.userDetails.username = action.payload.username;
            state.userDetails.displayName = action.payload.displayName;
            state.userDetails.role = action.payload.role;
            state.permission = action.payload.permission;
            state.isAuthenticated = action.payload.isAuthenticated;

            console.log("after log in >>>> ", state)
        }, 
        logoutUser : (state, action) => {
            console.log(">>>> Reset authentication")
            state.userDetails = initialState.userDetails
            state.permission = initialState.permission
            state.isAuthenticated = initialState.isAuthenticated
        }
    }
})

export const {loginUser, logoutUser} = authSlice.actions;
export default authSlice.reducer;