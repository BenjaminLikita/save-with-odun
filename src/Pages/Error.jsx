import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate(-1)
    }, 2000)
  })
  return (
    <div className='text-center absolute top-[50%] left-[50%] translate-x-[-50%]'>
      404 Error | Page Not Found 
    </div>
  )
}

export default Error