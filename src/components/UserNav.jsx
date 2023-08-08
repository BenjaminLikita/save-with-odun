import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { clearData } from '../Slices/userSlice';
import { Link, Router, useNavigate } from 'react-router-dom';
import logo from "../assets/ODUNinv.png"
import { BiSolidDashboard, BiSearch, BiBell } from 'react-icons/bi'
import { TbPigMoney, TbHistory, TbTarget } from 'react-icons/tb'
import { GiTakeMyMoney } from 'react-icons/gi'
import { SlSettings } from 'react-icons/sl'
import { FiLogOut } from 'react-icons/fi'
import clsx from 'clsx';
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import {TailSpin} from "react-loader-spinner"

function UserNav() {

    const dispatch = useDispatch()
    const [loggingOut, isLoggingOut] = useState(false)

    let href = window.location.href
    const index = href.lastIndexOf("/")
    href = href.slice(index)
    console.log(href);

    const [pageWidth, setPageWidth] = useState(window.innerWidth)

    const setWidth = () => {
      setPageWidth(window.innerWidth)
    }
    
    useEffect(() => {
      window.addEventListener("resize", setWidth)
      console.log(pageWidth);
    }, [pageWidth])

  return (
    <div className='sticky top-0 bg-[#F3F8F0] rounded-2xl shadow-sm px-3 pt-1 pb-3'>
      <ToastContainer />
      <img src={logo} className='h-20' alt="" />
      <div className="pt-10 flex flex-col gap-4">
        <Link to={"/user"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ', {
            "active": href === "/user"
        })}><BiSolidDashboard />Dashboard</Link>
        <Link to={"/user/my-target-boxes"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ', {
            "active": href === "/my-target-boxes"
        })}><TbTarget />My TargetBoxes</Link>
        <Link to={"/"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ')}><TbPigMoney />My Savings</Link>
        <Link to={"/"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ')}><GiTakeMyMoney />My Investments</Link>
        <Link to={"/"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ')}><TbHistory />History</Link>
        <Link to={"/"} className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ')}><SlSettings />Settings</Link>
        <Link to={"/"} onClick={(e) => {
            e.preventDefault()
            console.log("Logging Out");
            isLoggingOut(true);
            setTimeout(() => {
              isLoggingOut(false)
              toast("Logging Out...", {type:"info"})
              dispatch(clearData())
            }, 2000)
          }}
          className={clsx('flex items-center gap-3 px-5 py-3 border shadow-sm rounded-xl font-medium hover:bg-theme-lighter hover:text-white transition-all duration-500 ', {
            "justify-center": loggingOut
          })}>{!loggingOut && <FiLogOut />}{loggingOut ? <TailSpin height={30} width={30} color='#ccc' /> : "Log Out"}</Link>
      </div>
    </div>
  )
}

export default UserNav
