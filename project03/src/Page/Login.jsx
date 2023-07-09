import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuthenticate}) => {
  const nav = useNavigate()

  const loginUser=(event)=>{
    event.preventDefault()
    setAuthenticate(true)
    nav('/')
  }

  return (
    <div className='loginBox'>
      <h2>로그인</h2>
      <div>
        <form className='login' onSubmit={(event)=>loginUser(event)}>
          <div className="form-outline mb-4">
            <input type="email" id="form2Example1" className="form-control" />
            <div className="form-label">Email address</div>
          </div>

          <div className="form-outline mb-4">
            <input type="password" id="form2Example2"className="form-control" />
            <div className="form-label">Password</div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mb-4">로그인</button>
        </form>
      </div>
    </div>
  )
}

export default Login