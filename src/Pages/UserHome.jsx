import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setUserName } from '../Slices/userSlice'
import Navbar from '../components/Navbar'

function UserHome() {
  
  const {userName, email, token} = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    try {
      console.log(token);
      axios.post("http://localhost:5000/auth/", {token}).then(res => {
        if(res.data){
          console.log(res.data);
          dispatch(setUserName(res.data.first_name))
          dispatch(setEmail(res.data.email))
        }
      }).catch(err => console.log(err))
    } catch (err) {
      console.log(err);      
    }
  }, [])
  return (
    <>
    <Navbar />
    <div className="flex justify-between sm:w-[80%] w-[90%] m-auto py-5 drop-shadow-sm items-center border">
        USERNAME: {!userName ? "Loading!!" : userName}
        <br />
        EMAIL: {!email ? "Loading!!" : email}
    </div>
    </>
  )
}

export default UserHome
