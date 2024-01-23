import React, { useState } from 'react'
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

  
  const deposits = history.filter(entry => 
    entry.hist.some(transaction => transaction.type === "Deposit")
  );

  const withdrawals = history.filter(entry => 
    entry.hist.some(transaction => transaction.type === "Withdrawal")
  );

  console.log("filtered data", deposits);

  const [view, setView] = useState("all")

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
            <button
              onClick={() => setView("all")}
             className={view === "all" && 'text-theme-lighter'}>
              ALL
            </button>
            <button
              onClick={() => setView("deposits")}
             className={view === "deposits" && 'text-theme-lighter'}>
              DEPOSITS
            </button>
            <button
              onClick={() => setView("withdrawals")}
             className={view === "withdrawals" && 'text-theme-lighter'}>
              WITHDRAWALS
            </button>
          </div>

          <div className='flex flex-col gap-10'>
            {
              view === "all" &&
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
            {
              view === "deposits" &&
              deposits.map(item => (
                <div>
                  <span className='font-medium text-base md:text-lg block py-2'>{item.date}</span>
                  <div className='flex flex-col gap-5'>
                    {item.hist.map(action => (
                      <div className='bg-white p-7 rounded-md shadow flex items-center justify-between'>
                        <div className='flex flex-col gap-3 md:gap-7'>
                          <h1 className=' text-base md:text-xl font-medium'>{action.title}</h1>
                          <h2 className='font-sm text-xs md:text-base'>{action.type}</h2>
                        </div>
                        <h1 className={"text-theme-lighter font-semibold"}>+{action.amount}</h1>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            }
            {
              view === "withdrawals" &&
              withdrawals.map(item => (
                <div>
                  <span className='font-medium text-base md:text-lg block py-2'>{item.date}</span>
                  <div className='flex flex-col gap-5'>
                    {item.hist.map(action => (
                      <div className='bg-white p-7 rounded-md shadow flex items-center justify-between'>
                        <div className='flex flex-col gap-3 md:gap-7'>
                          <h1 className=' text-base md:text-xl font-medium'>{action.title}</h1>
                          <h2 className='font-sm text-xs md:text-base'>{action.type}</h2>
                        </div>
                        <h1 className={"text-[#E36767] font-semibold"}>-{action.amount}</h1>
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
