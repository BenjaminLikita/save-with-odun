import React from 'react'
import img from "../assets/unavailable.png"


function Unavailable() {
  return (
    <div className='flex flex-col items-center justify-center h-[80vh]'>
        <img src={img} alt="" />
        <p className='font-bold text-theme-color text-xl w-[60%] text-center'>Sorry this feature is still unavailable for now.</p>
      
    </div>
  )
}



export default Unavailable
