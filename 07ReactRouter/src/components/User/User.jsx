import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {UserId} = useParams()
  return (
    <div className='text-center bg-red-500 text-white text-3xl p-10'>User : {UserId}</div>
  )
}

export default User