import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login';

function Authentication() {

  return (
    <div className=' h-[100vh] w-full  bg-contain  '>
      <Login/>
    </div>
  )
}

export default Authentication