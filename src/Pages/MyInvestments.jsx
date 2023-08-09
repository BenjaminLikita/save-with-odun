import React from 'react'
import Unavailable from '../components/Unavailable'
import UserNav from '../components/UserNav'

function MyInvestments() {
  return (
    <>
      <div className='w-[98%] m-auto grid gap-10 grid-cols-3'>
        <UserNav />
        <div className='col-span-2 bg-[#F3F8F0] rounded-2xl shadow-sm'>
          <Unavailable />
        </div>
      </div>
    </>
  )
}

export default MyInvestments
