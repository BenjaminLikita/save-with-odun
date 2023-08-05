import React from 'react'
import Navbar from '../components/Navbar'
import img from "../assets/homePage.png"
import bgImg from "../assets/iconsBg.png"
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import { FaBook, FaBookOpen, FaPersonBooth } from 'react-icons/fa'
import { GoPerson } from 'react-icons/go'
import { HiOutlineChartBar } from 'react-icons/hi'
import { GiTakeMyMoney } from 'react-icons/gi'

function Home() {

  return (
    <div>
      <Navbar />
      <div className='sm:w-[90%] w-[90%] m-auto drop-shadow-sm items-center'>
        <div className="grid md:grid-flow-col sm:grid-flow-row gap-20 pt-10 items-center">
          <div>
            <h1 className='font-bold text-theme-color text-4xl'>Empowering you to save smarter.</h1>
            <p className='pt-5'>Are you ready to embark on a journey towards a secure and prosperous future? Look no further, because we’re hear to guide you every step of the way.</p>

            <Link to={"/auth/login"} className='block w-max px-8 py-3 mt-5 rounded-md text-white font-semibold shadow-sm hover:bg-white hover:text-black transition-all duration-700 bg-theme-color border'>
              <button>Start Saving</button>
            </Link>
          </div>
          <div className='relative'>
            <img src={img} className='rounded-lg w-[100%]' alt="" />
            <div className='h-[100%] w-[100%] absolute bottom-[-15px] right-[-15px] rounded-lg -z-10 bg-theme-light'></div> 
          </div>
        </div>
        <img src={bgImg} className='pt-10' alt="" />
      <div className="grid grid-cols-2 gap-[8%] my-10 mb-20">
        <Card title={"Education Targetbox"} icon={<FaBookOpen color='#074C0B' size={30}/>} text={
          "The goal here is to save for with your school fees in view. Plan ahead by starting to keep money for your next payment."
        }/>
        <Card title={"Studentpreneur Targetbox"} icon={<GoPerson color='#074C0B' size={30}/>} text={
          "This box is for student business owners. The goal is to set a target and save money for that great idea or for scaling up."
        }/>
        <Card title={"Investment Targetbox"} icon={<HiOutlineChartBar color='#074C0B' size={30}/>} text={
          "This box is for those who intend to invest with us. We have a wide range of profitable investments with great returns!"
        }/>
        <Card title={"Regular Targetbox"} icon={<GiTakeMyMoney color='#074C0B' size={30}/>} text={
          "This box is for hitting those saving goals. The goal is to startband practice the art of saving one step at a time."
        }/>
      </div>
      </div>
    </div>
  )
}

export default Home
