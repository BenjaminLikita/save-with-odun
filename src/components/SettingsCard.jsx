import React from 'react'
import ProfileSettingsCard from './ProfileSettingsCard'
import Unavailable from './Unavailable'
import PasswordSettingsCard from './PasswordSettingsCard'

function SettingsCard({title, page}) {
  return (
    <div className='p-10'>
        <h1 className='text-theme-color text-2xl font-bold'>{title}</h1>
        {
          page === "profile-settings" && (
            <ProfileSettingsCard />
          )
        }
        {
          page === "bank-card-settings" && (
            <Unavailable />
          )
        }
        {
          page === "password-settings" && (
            <PasswordSettingsCard />
          )
        }
    </div>
  )
  }

  export default SettingsCard
