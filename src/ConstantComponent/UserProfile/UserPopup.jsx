import React, { useContext, useEffect, useRef } from 'react'
import { FaX } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { AuthContxt } from '../../UI/AuthenticationComponent/AuthContext'

function UserPopup() {
  let { showPopup, setShowPopup, forPopupFalse } = useContext(AuthContxt)
  const popupRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        forPopupFalse()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setShowPopup])

  return (
    <div
      ref={popupRef}
      className={` ${showPopup ? "block" : "hidden"} absolute top-[70px] right-[13%] min-w-[170px] min-h-[150px] bg-[#0002] text-black bg-opacity-30 backdrop-blur-md shadow-lg rounded-lg p-4 z-50`}
    >
      <ul>
        <li className='py-2 text-white font-bold text-[14px] duration-500 hover:tracking-[1.5px] hover:font-semibold cursor-pointer border-b border-gray-400'>
          <Link to='/login' className=' bg-sky-500 block w-full rounded-md shadow-lg p-2'>Sign in</Link>
        </li>
        <li className='py-2 px-4 text-[14px] duration-500 hover:tracking-[1.5px] hover:font-semibold cursor-pointer border-b border-gray-400'>
          <Link to='/profile' className='  text-black'>Profile</Link>
        </li>
        <li className='py-2 px-4 text-[14px] duration-500 hover:tracking-[1.1px] hover:font-semibold cursor-pointer '>
          <Link to='/order-history' className='  text-black'>Orders History</Link>
        </li>
      </ul>
    </div>
  )
}

export default UserPopup
