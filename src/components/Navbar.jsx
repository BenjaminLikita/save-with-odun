import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearData } from '../Slices/userSlice'
// import Logo from "../assets/SaveWithOdunLogo.png"
import Logo from "../assets/ODUN.jpg"

function Navbar() {

  const [loggingOut, isLoggingOut] = useState(false)
  const {token} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const isAuth = Boolean(token)

  return (
    <div className="border-b">
        <div className="flex justify-between w-[90%] m-auto py-5 items-center">
          <h1 className=""><img className="h-14 p-0" src={Logo} alt="" /></h1>
          <ul className='flex gap-8 text-lg font-medium items-center'>
            <div className='flex gap-10 font-medium'>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Services</Link>
              <Link to={"/"}>About Us</Link>
              <Link to={"/"}>Customer Support</Link>
            </div>
          </ul>
          <ul className='flex gap-8 text-lg font-medium items-center'>
            {
              isAuth ?
              <>
                {/* <Link to={"/"}><li className='hover:bg-theme-color hover:text-white px-3 py-2 rounded-lg transition-all duration-500'>Home</li></Link> */}
                <Link to={"/auth/signup"}><li className='bg-theme-color px-3 py-2 hover:bg-white hover:text-black transition-all duration-500 text-white rounded-lg'
                onClick={() => {
                  isLoggingOut(true)
                  setTimeout(() => {
                    isLoggingOut(false)
                    dispatch(clearData())
                  }, 1000)
                }}
                >{!loggingOut ? "Log Out" : "Logging Out" }</li> </Link>
              </>

              :

              <>
                <Link to={"/auth/login"}><li className='hover:bg-theme-color hover:text-white px-5 py-2 rounded-lg transition-all duration-500 border border-gray-100'>Login</li></Link>
                <Link to={"/auth/signup"}><li className='bg-theme-color px-5 py-2 hover:bg-white hover:text-black border hover:border-gray-100 transition-all duration-500 text-white rounded-lg'>Sign Up</li> </Link>
              </>
            }
          </ul>
        </div>
    </div>
  )
}

export default Navbar
