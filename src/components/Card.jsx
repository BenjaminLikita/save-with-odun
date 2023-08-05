import React from 'react'

function Card({title, icon, text}) {
  return (
    <div className='bg-theme-light rounded-2xl p-10'>
        <div className="flex justify-between items-center">
            <h1 className='text-theme-color font-medium text-xl w-min pb-2 leading-tight'>{title}</h1>
            {icon}
        </div>
        <p>{text}</p>      
    </div>
  )
}

export default Card
