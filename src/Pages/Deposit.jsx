import React from 'react'
import Unavailable from '../components/Unavailable'
import UserNav from '../components/UserNav'
import { Link } from 'react-router-dom'

function Deposit() {
  return (
    <>
      {/* <div className='w-[98%] m-auto grid gap-10 grid-cols-3'> */}
      <div className='w-[98%] m-auto mt-2'>
        {/* <UserNav /> */}
        <div className='bg-[#F3F8F0] rounded-2xl shadow-sm'>
          <Link to={"/user"} className=''>Back</Link>
          <Unavailable />
        </div>
      </div>
    </>
  )
}

export default Deposit
