import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearData } from '../Slices/userSlice'
import {FaBars} from "react-icons/fa"
// import Logo from "../assets/SaveWithOdunLogo.png"
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
    Array.from(document.querySelector(".close-nav").children).map(item => {
      item.addEventListener("click", () => {
          setVisible(false)
        })
    })
  }, [])
  
      
  return (
    <div className="border-b">
        <div className="flex justify-between w-[90%] m-auto py-2 md:py-5 items-center">
          <h1 className=""><img className="h-14" src={Logo} alt="" /></h1>
          <ul className='flex gap-8 text-lg font-medium items-center'>
            <div className='hidden md:flex gap-10 font-medium'>
              <Link to={"/"}>Home</Link>
              <Link to={"/"}>Services</Link>
              <Link to={"/"}>About Us</Link>
              <Link to={"/"}>Customer Support</Link>
            </div>
          </ul>
          <ul className='hidden lg:flex gap-8 text-lg font-medium items-center'>
            {
              isAuth ?
              <>
                {/* <Link to={"/"}><li className='hover:bg-theme-color hover:text-white px-3 py-2 rounded-lg transition-all duration-500'>Home</li></Link> */}
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

          <FaBars size={30} onClick={() => setVisible(true)} className="hover:text-theme-color cursor-pointer transition-all duration-700 md:hidden block" />
        </div>

        <div className={clsx("absolute bg-white w-[60%] md:w-[30%] h-[100%] z-30 transition-all duration-500 border shadow-lg", {
          "top-0 right-0": visible,
          "-right-[100%]": !visible,
        })}>
          <div className="relative">
            <IoMdClose onClick={() => setVisible(false)} size={30} className='absolute top-5 right-5' />
            <div className="px-6 py-16">
              <ul>
                <div className='flex flex-col font-medium gap-5 pb-10 md:text-base text-sm close-nav'>
                  <Link to={"/"} className='hover:pl-4 transition-all duration-500'>Home</Link>
                  <Link to={"/"} className='hover:pl-4 transition-all duration-500'>Services</Link>
                  <Link to={"/"} className='hover:pl-4 transition-all duration-500'>About Us</Link>
                  <Link to={"/"} className='hover:pl-4 transition-all duration-500'>Customer Support</Link>
                </div>
              </ul>
              <ul className='w-[70%] flex flex-col gap-2'>
              {/* <ul className='hidden lg:flex gap-8 text-lg font-medium items-center'> */}
                  {
                    isAuth ?
                    <>
                      {/* <Link to={"/"}><li className='hover:bg-theme-color hover:text-white px-3 py-2 rounded-lg transition-all duration-500'>Home</li></Link> */}
                      <Link to={"/auth/signup"}><li className='bg-theme-color px-3 py-2 hover:bg-white hover:text-black transition-all duration-500 text-white rounded-lg'
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
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
