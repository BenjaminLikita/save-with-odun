import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearData } from '../Slices/userSlice'
import {FaBars} from "react-icons/fa"
import Logo from "../assets/ODUN.jpg"
import {clsx} from "clsx"
import { IoMdClose } from 'react-icons/io'

function Navbar() {

  const [visible, setVisible] = useState(false)
  const [loggingOut, isLoggingOut] = useState(false)
  const {token} = useSelector(state => state.user)
  const dispatch = useDispatch()
  const isAuth = Boolean(token)

  useEffect(() => {
    // This is set so that the sidebar closes because all the links hrefs are "/"
    // Array.from(document.querySelector(".close-nav").children).map(item => {
    //   item.addEventListener("click", () => {
    //       setVisible(false)
    //     })
    // })
  }, [])
  
      
  return (
    
    <div className="border-b">
      <div className="flex justify-between w-[90%] m-auto py-2 md:py-5 items-center">
        <h1 className=""><img className="h-14" src={Logo} alt="" /></h1>
        <div className={clsx(`block md:flex gap-8 py-16 pl-8 pr-5 shadow-2xl shadow-gray-400 md:shadow-none md:p-0 bg-white md:bg-transparent fixed top-0 z-30 h-full sm:w-[50%] md:w-auto md:relative transition-all duration-500`, {
          ["right-0"] : visible,
          ["right-[-100%] md:right-0"] : !visible,
        })}>
          <ul className='flex gap-8 text-lg font-medium items-center'>
            <div className='flex flex-col md:flex-row gap-5 pb-5 md:p-0 md:gap-10 font-medium'>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Services</Link>
              <Link to={"/"}>About Us</Link>
              <Link to={"/"}>Customer Support</Link>
            </div>
          </ul>
          <ul className='flex md:hidden lg:flex gap-3 flex-col lg:flex-row lg:gap-5 text-lg font-medium lg:items-center justify-between'>
            {
              isAuth ?
              <>
                <Link to={"/auth/signup"}><li className='bg-theme-color px-3 py-2 hover:bg-white hover:text-black transition-all border shadow-sm duration-500 text-white rounded-lg'
                onClick={() => {
                  isLoggingOut(true);
                  setTimeout(() => {
                    isLoggingOut(false)
                    dispatch(clearData())
                  }, 1000)
                }}
                >{loggingOut ? "Logging Out" : "Log Out" }</li> </Link>
              </>
              :
              <>
                <Link to={"/auth/login"}><li className='hover:bg-theme-color hover:text-white px-5 py-2 rounded-lg transition-all duration-500 border border-gray-100'>Login</li></Link>
                <Link to={"/auth/signup"}><li className='bg-theme-color px-5 py-2 hover:bg-white hover:text-black border hover:border-gray-100 transition-all duration-500 text-white rounded-lg'>Sign Up</li> </Link>
              </>
            }
          </ul>
        <IoMdClose size={30} onClick={() => setVisible(false)} className="hover:text-theme-color absolute right-[5%] top-[2%] cursor-pointer transition-all duration-700 md:hidden block" />
        </div>

        <FaBars size={30} onClick={() => setVisible(true)} className="hover:text-theme-color cursor-pointer transition-all duration-700 md:hidden block" />
      </div>        
    </div>
  )
}

export default Navbar
