import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { FaPlus } from 'react-icons/fa'
import { BiSearch, BiBell } from 'react-icons/bi'
import UserNav from '../components/UserNav'
import userProfile from "../assets/default-image.png"
import useAuth from '../hooks/useAuth'
import LineChartComp from '../components/LineChartComp'
import { ToastContainer } from 'react-toastify'
import { TbPigMoney, TbHistory, TbTarget, TbDotsVertical } from 'react-icons/tb'
import clsx from 'clsx'
import budgetting from "../assets/budgetting.png"
import settingGoals from "../assets/setting-goals.png"

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
      <ToastContainer />
      <div className="block lg:grid gap-10 items-start grid-cols-3">
        <UserNav />
        <div className='flex flex-col col-span-2 mb-5'>
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
          
          <div className='bg-[#F3F8F0] hidden lg:block rounded-2xl mt-5 py-5 shadow'>
            <LineChartComp chartData={userData} screenSize={windowDimension} />
          </div>

          <UserHomeMobileComponent />
          
        </div>


      </div>
    </div>
  )
}

export default UserHome



const UserHomeMobileComponent = () => {

  const [view, setView] = useState("savings")

  const saveCards = [
    {title: "2024: No gree!", subTitle: "Regular Savings", percentCompleted: 100},
    {title: "For school Fees", subTitle: "Target Savings", percentCompleted: 67},
    {title: "Aishas Birthday", subTitle: "Target Savings", percentCompleted: 42},
  ]

  const spotlightCards = [
    {title: "SETTING GOALS", src: settingGoals},
    {title: "BUDGETTING 101", src: budgetting}
  ]
  
  return (
    <div className="block lg:hidden mt-5 p-2">
      <div className='flex justify-center items-center gap-10 md:gap-20'>
        <button onClick={() => setView("savings")} className={`${view === "savings" ? "bg-[#F3F8F0]" : "bg-[#D9D9D9]"} py-3 px-10 text-xs`}>SAVINGS</button>
        <button onClick={() => setView("spotlight")} className={`${view === "spotlight" ? "bg-[#F3F8F0]" : "bg-[#D9D9D9]"} py-3 px-10 text-xs`}>SPOTLIGHT</button>

      </div>
      {
        view === "savings" && (
          <div>
            <button className='bg-theme-lighter text-white font-medium w-[70%] m-auto my-5 p-4 rounded-lg  flex gap-5 justify-center items-center'><FaPlus />New Savings Target</button>

            <div className='h-[300px]'>
              <h3 className='font-bold py-2'>My Current Savings</h3>
              <div className='flex flex-col gap-5 py-5'>
                {saveCards.map(item => (
                  <div className={clsx("flex rounded-md shadow py-10 gap-5 pr-5 md:pr-10 ", {
                    ["bg-[#FFF3F0]"] : item.percentCompleted < 100,
                    ["bg-[#E8FCFD]"] : item.percentCompleted === 100,
                  })}>
                    <div className="px-3 md:px-5 pr-0">
                      {
                        item.subTitle === "Regular Savings" ?
                        <TbPigMoney size={30} />
                        :
                        <TbTarget size={30} />                      
                      }
                    </div>
                    <div className="grow-[2] flex flex-col gap-3 md:gap-7">
                      <h1 className='font-semibold'>{item.title}</h1>
                      <p>{item.subTitle}</p>
                    </div>
                    { 
                      item.percentCompleted !== 100 && (
                      <div className="grow-[2] self-center flex flex-col gap-2 md:gap-5">
                        <h1 className='text-sm md:text-base'>{item.percentCompleted}% complete</h1>
                        {/* <div className={`w-[100%] h-1 md:h-2 rounded relative bg-[#C7B9B9] after:absolute after:top-0 after:left-0 after:bg-[#14B84B] after:w-[${item.percentCompleted}%] after:z-20 after:h-1 after:md:h-2 after:rounded`}></div> */}
                        <div className={`w-[100%] h-1 md:h-2 rounded relative bg-[#C7B9B9]`}>
                          <div
                          className={`absolute top-0 left-0 bg-[#14B84B] w-[${item.percentCompleted}%] z-20 h-1 md:h-2 rounded`}
                          style={{width: `${item.percentCompleted}%`}}
                          >
                          </div>
                        </div>
                      </div>
                      )
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      }
      {
        view === "spotlight" && (
          <div className='flex flex-col gap-5 my-3'>
            {
              spotlightCards.map(item => (
                <Link to={""} className='relative'>
                  <div className='absolute right-5 top-6 cursor-pointer p-3 rounded-full text-white hover:text-black hover:bg-white transition-all duration-500'>
                    <TbDotsVertical size={30} />
                  </div>
                  <h1 className='absolute bottom-6 left-5 font-semibold text-white text-3xl'>{item.title}</h1>
                  <img className='w-[100%]' src={item.src}/>
                </Link>
              ))
            }
          </div>
        )
      }
    </div>
  )
}