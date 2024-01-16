import React, { useState } from 'react'
// import img from ""
import img from "../assets/default-image.png"

const ProfileSettingsCard = () => {
  const [image, setImage] = useState()
  return (
    <div>
        <form action="" className='flex flex-col gap-3 my-3'>
              <div>
                <label htmlFor="" className='block text-sm font-semibold py-1'>Your Avatar</label>
                <div className="flex items-center mt-3 gap-5 w-auto">
                  <label htmlFor="imgFile" className='cursor-pointer flex items-center gap-5'>
                    <img className='w-[70px] h-[70px] object-cover object-top rounded-full' src={image || img} alt="" />
                    <span className='bg-theme-color p-3 text-white font-semibold rounded-md'>Upload Image</span>
                  </label>
                  <input type="file" id='imgFile' 
                  onChange={(e) => {
                    console.log(e.target.files);
                    const url = URL.createObjectURL(e.target.files[0])
                    console.log(url);
                    setImage(url)
                  }}
                  className='hidden' />
                </div>
              </div>
              <div>
                <label htmlFor="" className='block text-sm font-semibold py-1'>First Name</label>
                <input type="text" name='first-name' className='bg-theme-light px-3 py-2 rounded-lg w-full focus:outline-none' />
              </div>
              <div>
                <label htmlFor="" className='block text-sm font-semibold py-1'>Other Names</label>
                <input type="text" name='otherNames' className='bg-theme-light px-3 py-2 rounded-lg w-full focus:outline-none' />
              </div>
              <div>
                <label htmlFor="" className='block text-sm font-semibold py-1'>Email</label>
                <input type="email" name='email' className='bg-theme-light w-full px-3 py-2 rounded-lg focus:outline-none' />
              </div>
              <div>
                <label htmlFor="" className='block text-sm font-semibold py-1'>Phone number</label>
                <input type="text" name='phoneNumber' className='bg-theme-light w-full px-3 py-2 rounded-lg focus:outline-none' />
              </div>
              
              <button className='bg-theme-color font-bold text-white hover:text-black flex items-center justify-center gap-2 rounded-md shadow-sm py-3 mt-1 transition-all duration-700 hover:bg-white'
              onClick={() => setModal(!modal)}
              >UPDATE PROFILE</button>
            </form>
    </div>
  )
}

export default ProfileSettingsCard