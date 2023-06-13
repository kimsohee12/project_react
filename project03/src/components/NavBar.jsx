import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-regular-svg-icons"

const NavBar = () => {
  return (
    <div>
        <div className='login-button'>
        <FontAwesomeIcon icon={faUser} />
        <div className='text-login'> 로그인</div>
   
        </div>

        <div>

        </div>

        <div>

        </div>
    </div>
  )
}

export default NavBar