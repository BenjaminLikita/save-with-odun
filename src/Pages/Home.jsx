import React from 'react'
import Navbar from '../components/Navbar'
import img from "../assets/homePage.png"
import bgImg from "../assets/iconsBg.png"
import { Link } from 'react-router-dom'

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
            <div className='bg-[#C6FCC9] h-[100%] w-[100%] absolute bottom-[-15px] right-[-15px] rounded-lg -z-10'></div>
          </div>
        </div>
        <img src={bgImg} className='pt-10' alt="" />
      </div>
    </div>
  )
}

export default Home
