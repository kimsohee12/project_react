import React from 'react'

const Login = () => {
  return (
    <div className='loginBox'>
      <form className='login'>
        <div class="form-outline mb-4">
          <input type="email" id="form2Example1" class="form-control" />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>

        <div class="form-outline mb-4">
          <input type="password" id="form2Example2" class="form-control" />
          <label class="form-label" for="form2Example2">Password</label>
        </div>
        <button type="button" class="btn btn-primary btn-block mb-4">로그인</button>

      </form>
    </div>
  )
}

export default Login