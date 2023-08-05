import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearData, setEmail, setUserName } from '../Slices/userSlice'
import Navbar from '../components/Navbar'
import logo from "../assets/ODUN.jpg"
import { Link } from 'react-router-dom'

function UserHome() {
  
  const {userName, email, token} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const currentDate = new Date()
  const date = currentDate.getDate()
  const month = currentDate.getMonth()
  console.log(date, month);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const [loggingOut, isLoggingOut] = useState(false)

  useEffect(() => {
    try {
      console.log(token);
      axios.post("http://localhost:5000/auth/", {token}).then(res => {
        if(res.data){
          // console.log(res.data);
          dispatch(setUserName(res.data.first_name))
          dispatch(setEmail(res.data.email))
        }
      }).catch(err => err)
      // }).catch(err => console.log(err))
    } catch (err) { return err };
    // } catch (err) {
    //   console.log(err);      
    // }
  }, [])
  return (
    <div className='w-[90%] m-auto'>
    {/* <Navbar /> */}
      <div className="flex items-center justify-between">
        <img src={logo} className='h-20' alt="" />
        <div className="flex items-center">
          <div className='flex items-center gap-3'>
            <div className='w-[40px] h-[40px] rounded-full bg-gray-400'></div>
            <div className='border-r-[1.5px] pr-8 border-gray-700'>
              <p className="block text-xs">Welcome,</p>
              <h1 className='font-medium'>{userName}</h1>
            </div>
          </div>
          <div className='px-8'>
            <p className='font-medium'>{date} {months[date]}</p>
          </div>
        <Link to={"/auth/signup"}>
          <li className='bg-theme-color px-3 py-2 hover:bg-white hover:text-black transition-all duration-500 text-white rounded-lg list-none'
                      onClick={() => {
                        isLoggingOut(true);
                        setTimeout(() => {
                          isLoggingOut(false)
                          dispatch(clearData())
                        }, 1000)
                      }}
                      >{loggingOut ? "Logging Out" : "Log Out" }
            </li>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserHome
