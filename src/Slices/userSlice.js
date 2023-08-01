import {createSlice} from "@reduxjs/toolkit"



const initialState = {
    userName: "",
    email: "",
    token: ""
}


const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers:{
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

export const {setUserName, setEmail, setToken, clearData} = userSlice.actions
export default userSlice.reducer