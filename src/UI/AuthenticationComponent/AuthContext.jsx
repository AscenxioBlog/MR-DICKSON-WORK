import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API_URL from '../../Config';


export const AuthContxt = createContext();

function AuthContext({children}) {
    // for checking if user is logged in
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    let [showPopup,setShowPopup] = useState(false)
    const navigate = useNavigate()

    let forPopup = () => {
      setShowPopup(true)
    }

    let forPopupFalse = () => {
      setShowPopup(false)
    }

    useEffect(() => {
        fetch(`${API_URL}/auth/check`, {
          method: 'GET',
          credentials: 'include',
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.loggedIn) {
              setIsLoggedIn(true)
                console.log(isLoggedIn)

              // you can also save user info here if needed
            } else {
              setIsLoggedIn(false)
            }
          })
          .catch(() => {
            setIsLoggedIn(false)
          })
      }, [])
      
    
    const handleUserIconClick = () => {
        if (isLoggedIn) {
            setShowPopup(!showPopup)
        } else {
            navigate('/Checkuser')
        }
    }

    const handleLogout = async () => {
        try {
            const response = await fetch(`${API_URL}/auth/logout`, {
            // await fetch(`${API_URL}/auth/logout`, {
                method: 'POST',
                credentials: 'include',
            });
            const data = await response.json()
            console.log(data)
            if (response.ok) {
                setIsLoggedIn(false);
                navigate('/');
                window.location.reload();
            } else {
                console.error('Failed to log out:', response.statusText);
            }
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

  return (
    <AuthContxt.Provider value={{handleUserIconClick, showPopup, forPopup, forPopupFalse,isLoggedIn,setIsLoggedIn, handleLogout}}>
        {children}
    </AuthContxt.Provider>
  )
}

export default AuthContext