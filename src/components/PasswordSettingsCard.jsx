import React from 'react'

const PasswordSettingsCard = () => {
  return (
    <div>
        <form action="" className='flex flex-col gap-7 my-3'>
          <div>
            <label htmlFor="" className='block text-sm lg:text-lg font-semibold py-1'>Current Password</label>
            <input type="text" name='currentPassword' className='bg-theme-light px-3 py-2 rounded-lg w-full focus:outline-none' />
          </div>
          <div>
            <label htmlFor="" className='block text-sm lg:text-lg font-semibold py-1'>New Password</label>
            <input type="text" name='newPassword' className='bg-theme-light px-3 py-2 rounded-lg w-full focus:outline-none' />
          </div>
          <div>
            <label htmlFor="" className='block text-sm lg:text-lg font-semibold py-1'>Confirm New Password</label>
            <input type="text" name='confirmNewPassword' className='bg-theme-light px-3 py-2 rounded-lg w-full focus:outline-none' />
          </div>
          
          <button className='bg-theme-color font-bold text-white hover:text-black flex items-center justify-center gap-2 rounded-md shadow-sm py-3 mt-1 transition-all duration-700 hover:bg-white'
          onClick={() => setModal(!modal)}
          >UPDATE PASSWORD</button>
        </form>
    </div>
  )
}

export default PasswordSettingsCard