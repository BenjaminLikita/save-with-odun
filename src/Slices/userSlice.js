import {createSlice} from "@reduxjs/toolkit"



const initialState = {
    userName: "",
    email: "jjk",
    token: ""
}


const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers:{
        setUser(state, action){
            state.userName = action.payload.userName
            state.email = action.payload.email
            state.token = action.payload.token
            // state.email = action.payload.email
            // console.log("state", state.email)
            
        },
        setUserName(state, action){
            state.userName = action.payload
        },
        setEmail(state, action){
            state.email = action.payload
        },
        setToken(state, action){
            state.token = action.payload
        },
        clearData(state){
            state.userName = state.email = state.token = ""
        }
    }
})

export const {setUser, setUserName, setEmail, setToken, clearData} = userSlice.actions
export default userSlice.reducer