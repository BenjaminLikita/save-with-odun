import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearData, setEmail, setUserName } from '../Slices/userSlice'
import Navbar from '../components/Navbar'
import { Link, NavLink } from 'react-router-dom'
import { AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { FaPlus } from 'react-icons/fa'
import { BiSolidDashboard, BiSearch, BiBell } from 'react-icons/bi'
import { TbPigMoney, TbHistory, TbTarget } from 'react-icons/tb'
import { GiTakeMyMoney } from 'react-icons/gi'
import { SlSettings } from 'react-icons/sl'
import { FiLogOut } from 'react-icons/fi'
import UserNav from '../components/UserNav'

// TBPIGMONEY

function UserHome() {
  
  const {userName, email, token} = useSelector(state => state.user)
  const [windowDimension, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })


  }
  
  useEffect(() => {
    window.addEventListener("resize", detectSize)

    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [windowDimension])

  const dispatch = useDispatch()
  const currentDate = new Date()
  const date = currentDate.getDate()
  const month = currentDate.getMonth()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  

  const data = [
    {Saved: 11, week: 1},
    {Saved: 10, week: 2},
    {Saved: 12, week: 3},
    {Saved: 15, week: 4},
    {Saved: 9, week: 5},
    {Saved: 6, week: 6},
    {Saved: 12, week: 7},
    {Saved: 15, week: 8},
    {Saved: 10, week: 9},
    {Saved: 13, week: 10},
    {Saved: 2, week: 11},
    {Saved: 13, week: 12},
  ]
  useEffect(() => {
    try {
      // axios.post("http://13.36.169.10/api/auth/", {token}).then(res => {
      axios.post("http://benjaminlikita.pythonanywhere.com/auth/", {token}).then(res => {
        if(res.data){
          dispatch(setUserName(res.data.first_name))
          dispatch(setEmail(res.data.email))
        }
      }).catch(err => err)
    } catch (err) { return err };
  }, [])
  return (
    <div className='w-[98%] m-auto'>
      <div className="grid gap-10 items-start grid-cols-3">
        <UserNav />
        <div className='flex flex-col col-span-2'>
            <div className='flex items-center py-4 bg-[#F3F8F0] px-3 rounded-2xl shadow-sm'>
              <div className='flex items-center gap-3'>
                <div className='w-[50px] h-[50px] rounded-full bg-gray-400'></div>
                <div className='border-r-[1.5px] pr-8 border-gray-700'>
                  <p className="block text-xs">Welcome,</p>
                  <h1 className='font-medium'>{userName}</h1>
                </div>
              </div>
              <div className='px-8'>
                <p className='font-medium'>{date} {months[date]}</p>
              </div>
              <div className='relative flex items-center'>
                <BiSearch size={20} className='absolute ml-3 text-gray-400 focus-within:text-gray-600 focus-within:border-r  pointer-events-none' />
                <input type="search" className='border rounded-3xl py-2 px-5 pl-10 focus:outline outline-theme-color outline-1' name="" id="" placeholder={'Search'} />
              </div>

              <div className='relative cursor-pointer rounded-full p-1 hover:bg-theme-lighter transition-all duration-500 hover:text-white'>
                <span className='absolute px-1 rounded-full bg-red-500 text-xs font-medium top-[-3px] right-0'>3</span>
                <BiBell size={28}/>
              </div>
              
            </div>
          
          <div className="pt-5">
            <div className='bg-[#F3F8F0] rounded-2xl py-5 px-7 shadow'>
              <div className="flex justify-between items-center font-medium">
                <h1>Account Balance</h1>
                <Link to={"/user/deposit"} className='bg-theme-lighter text-white hover:text-black flex items-center gap-2 rounded-md shadow-sm p-2 transition-all duration-700 hover:bg-white'><FaPlus />DEPOSIT</Link>
              </div>
              <h1 className='pt-5 text-theme-color font-semibold text-xl'>₦300,000.54</h1>
              <div className='pt-10 flex justify-end'>
                <Link className='text-end text-sm' to={"/"}>TRANSACTION HISTORY</Link>
              </div>
            </div>
          </div>
          
          <div className="pt-5">
            <div className='bg-[#F3F8F0] rounded-2xl py-5 px-7 pl-0 shadow'>
              <LineChart width={windowDimension.winWidth < 1200 ? windowDimension.winWidth - 450 : 700} height={250} data={data}>
                <Line type={"monotone"} dataKey={"Saved"} stroke='#064F99' strokeWidth={1}/>
                <CartesianGrid stroke='#999' />
                <XAxis dataKey={"week"} />
                <YAxis />
                <Tooltip />
                <Legend className='yea'/>
              </LineChart>
            </div>
          </div>
          
        </div>


      </div>
    </div>
  )
}

export default UserHome
