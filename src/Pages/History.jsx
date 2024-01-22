import React from 'react'
import Unavailable from '../components/Unavailable'
import UserNav from '../components/UserNav'

function History() {

  const history = [
    {date: "12th Jan, 2024", 
      hist: [
        {title: "For School Fees", type: "Deposit", amount: "3000.00"},
        {title: "Aishas Birthday", type: "Deposit", amount: "500.00"}
    ]},
    {date: "10th Jan, 2024", 
    hist: [
      {title: "Regular Withdrawal", type: "Withdrawal", amount: "5000.00"}
    ]},
    {date: "6th Jan, 2024", 
      hist: [
        {title: "For School Fees", type: "Deposit", amount: "500.00"},
        {title: "Regular Savings", type: "Deposit", amount: "500.00"}
    ]},
  ]
  return (
    <>
      <div className='w-[98%] m-auto block lg:grid gap-10 grid-cols-3 lg:mt-2'>
        <UserNav />
        <div className='col-span-2 bg-[#F3F8F0] rounded-2xl shadow-sm py-10 px-4'>
          <div>
            <h3 className='font-medium text-md text-[#8C928C]'>TOTAL BALANCE</h3>
            <h1 className='font-semibold text-4xl text-theme-lighter'>₦127,450.54</h1>
          </div>

          <div className={'text-lg flex justify-between w-[100%] md:w-[70%] m-auto my-10 font-medium text-center'}>
            <button className='text-theme-lighter'>ALL</button>
            <button>DEPOSITS</button>
            <button>WITHDRAWALS</button>
          </div>

          <div className='flex flex-col gap-10'>
            {
              history.map(item => (
                <div>
                  <span className='font-medium text-base md:text-lg block py-2'>{item.date}</span>
                  <div className='flex flex-col gap-5'>
                    {item.hist.map(action => (
                      <div className='bg-white p-7 rounded-md shadow flex items-center justify-between'>
                        <div className='flex flex-col gap-3 md:gap-7'>
                          <h1 className=' text-base md:text-xl font-medium'>{action.title}</h1>
                          <h2 className='font-sm text-xs md:text-base'>{action.type}</h2>
                        </div>
                        <h1 className={`${action.type === "Deposit" ? "text-theme-lighter" : "text-[#E36767]"} text-lg md:text-xl font-semibold`}>{action.type === "Deposit" ? "+" : "-"}{action.amount}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default History
