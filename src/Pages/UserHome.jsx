import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { FaPlus } from 'react-icons/fa'
import { BiSearch, BiBell } from 'react-icons/bi'
import UserNav from '../components/UserNav'
import userProfile from "../assets/default-image.png"
import useAuth from '../hooks/useAuth'
import LineChartComp from '../components/LineChartComp'


function UserHome() {
  
  const {userName} = useAuth()
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

  const currentDate = new Date()
  const date = currentDate.getDate()
  const month = currentDate.getMonth()
  console.log(month);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  

  const data = [
    {Saved: 11, week: "Week 1"},
    {Saved: 10, week: "Week 2"},
    {Saved: 12, week: "Week 3"},
    {Saved: 15, week: "Week 4"},
    {Saved: 9, week: "Week 5"},
    {Saved: 6, week: "Week 6"},
    {Saved: 12, week: "Week 7"},
    {Saved: 15, week: "Week 8"},
    {Saved: 10, week: "Week 9"},
    {Saved: 13, week: "Week 10"},
    {Saved: 2, week: "Week 11"},
    {Saved: 13, week: "Week 12"},
  ]
  
  const [userData, setUserData] = useState({
    labels: data.map(data => data.week),
    datasets: [{
      label: "Saved",
      data: data.map(data => data.Saved),
      fill: true,
      backgroundColor: "#C6FCC9",
      borderColor: "#329F38",
      lineTension: 0.5,
      cubicInterpolationMode: 'monotone'
    }]
  })

  
  return (
    <div className='w-[98%] m-auto mt-0 lg:mt-2'>
      <div className="block lg:grid gap-10 items-start grid-cols-3">
        <UserNav />
        <div className='flex flex-col col-span-2'>
            <div className='hidden lg:flex items-center py-4 bg-[#F3F8F0] px-3 rounded-2xl shadow-sm'>
              <div className='flex items-center gap-3'>
                <img src={userProfile} className='w-[50px] h-[50px] object-cover object-top rounded-full' />
                <div className='border-r-[1.5px] pr-8 border-gray-700'>
                  <p className="block text-xs">Welcome,</p>
                  <h1 className='font-medium'>{userName}</h1>
                </div>
              </div>
              <div className='px-8'>
                <p className='font-medium'>{`${months[month]} ${date} `}</p>
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
          
          <div className="pt-0 lg:pt-5">
            <div className='bg-theme-lighter rounded-2xl py-5 px-7 shadow'>
            {/* <div className='bg-[#F3F8F0] rounded-2xl py-5 px-7 shadow'> */}
              <div className="flex justify-between items-center font-medium">
                <h1 className='text-theme-light'>Account Balance</h1>
                <Link to={"/user/deposit"} className='bg-theme-light text-gray-700 flex items-center gap-2 rounded-md shadow-sm p-2 transition-all duration-700 hover:bg-white'><FaPlus />DEPOSIT</Link>
              </div>
              <h1 className='pt-5 text-white font-semibold text-4xl'>₦300,000.54</h1>
              <div className='pt-10 flex justify-end'>
                <Link className='text-end text-sm text-theme-light' to={"/user/history"}>TRANSACTION HISTORY</Link>
              </div>
            </div>
          </div>
          
          <div className="pt-5">
            <div className='bg-[#F3F8F0] rounded-2xl py-5 shadow'>
              <LineChartComp chartData={userData} screenSize={windowDimension} />
            </div>
          </div>
          
        </div>


      </div>
    </div>
  )
}

export default UserHome
