import React, { useState } from 'react'
import Unavailable from '../components/Unavailable'
import UserNav from '../components/UserNav'
import clsx from 'clsx'
import SettingsCard from '../components/SettingsCard'

function Settings() {

  const [data, setData] = useState({title: "Profile Settings", page: "profile-settings"})
  return (
    <div className='w-[98%] m-auto gap-10 block lg:grid grid-cols-3 mt-2'>
        <UserNav />
        <div className='col-span-2'>
            <div className='bg-[#F3F8F0] py-5 px-3 rounded-2xl shadow-sm'>
                <div>
                    <ul className='w-[100%] sm:w-[90%] lg:w-[60%]  m-auto flex items-center justify-between text-xs font-medium'>
                        <button className={clsx('border border-[#F3F8F0] p-3 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500', {
                            "bg-theme-lighter text-white": data.page === "profile-settings"
                        })}
                        onClick={() => setData({title: "Profile Settings", page: "profile-settings"})}>Profile Settings</button>
                        <button className={clsx('border border-[#F3F8F0] p-3 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500', {
                            "bg-theme-lighter text-white": data.page === "bank-card-settings"
                        })}
                        onClick={() => setData({title: "Bank/Card Settings", page: "bank-card-settings"})}
                        >Bank/Card Settings</button>
                        <button className={clsx('border border-[#F3F8F0] p-3 rounded-lg hover:bg-theme-lighter hover:text-white  transition-all duration-500', {
                            "bg-theme-lighter text-white": data.page === "password-settings"
                        })}
                        onClick={() => setData({title: "Password Settings", page: "password-settings"})}
                        >Password Settings</button>
                    </ul>
                    
                    <SettingsCard title={data.title} page={data.page}/>
                    {/* <Boxes type={page} /> */}
                </div>
            </div>


        </div>
        
    </div>
  )
}

export default Settings
