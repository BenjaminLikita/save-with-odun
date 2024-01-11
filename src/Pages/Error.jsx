import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Error() {

  const navigate = useNavigate()

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate(-1)
  //   }, 2000)
  // })
  return (
    // <div className='text-center absolute top-[50%] left-[50%] translate-x-[-50%]'>
    <div className='text-center h-[80vh] grid place-items-center'>
      <div>
        <h1 className='font-bold'>404 Error | Page Not Found</h1>
        <Link to={"/"} className='block mt-6 underline'>Return to Homepage</Link>
      </div>
    </div>
  )
}

export default Error