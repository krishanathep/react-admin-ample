import React from 'react'
import { useForm } from "react-hook-form"
import { useSignIn } from 'react-auth-kit'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignIn() {

  const navigate = useNavigate()
  const signIn = useSignIn()
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const REACT_APP_API = 'https://express-mongodb-api-server.onrender.com/api/auth/login'

  const onSubmit = async data => {
    try {
      await axios.post(REACT_APP_API, data)
        .then((res)=>{

          const token = res.data.token

          if(token != null) {
            if(signIn({
              token: res.data.token,
              authState: res.data.payload.user,
              expiresIn: 60,
              tokenType: "Bearer",
            })){
              navigate('/')
              window.location.reload();
            }
          } else {
            console.log('เกิดข้อผิดพลาด!!!')
          }
        })
    } catch(error){
      console.log(error)
    }
  }

  return (
  <div className="main-wrapper">
  <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={{background: 'url(src/assets/ample/src/assets/images/big/auth-bg.jpg) no-repeat center center'}}>
    <div className="auth-box p-4 bg-white rounded">
      <div id="loginform">
      <div className="logo text-center">
          <span className="db"><img src="ample/src/assets/images/logos/logo-icon.png" alt="logo" /></span>
          <h5 className="font-weight-medium mb-3 mt-1">Sign In to System</h5>
        </div>
        <div className="row">
          <div className="col-12">
            <form className="form-horizontal mt-3" id="loginform" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-floating mb-3">
                <input type="email" className="form-control form-input-bg" id="tb-rfname" placeholder="john deo" {...register("email", { required: true })} required  />
                <label htmlFor="tb-rfname">Email</label>
                <div className="invalid-feedback">
                  Full email is required
                </div>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control form-input-bg" id="tb-rfname" placeholder="john deo" {...register("password", { required: true })} required />
                <label htmlFor="tb-rfname">Password</label>
                <div className="invalid-feedback">
                  Full password is required
                </div>
              </div>
              <div className="form-group">
                <div className="d-flex">
                  <div className="checkbox checkbox-info pt-0">
                    <input id="checkbox-signup" type="checkbox" className="material-inputs chk-col-indigo" />
                    <label htmlFor="checkbox-signup"> Remember me </label>
                  </div>
                  <div className="ms-auto">
                    <a href="javascript:void(0)" id="to-recover" className="link font-weight-medium"><i className="fa fa-lock me-1" /> Forgot pwd?</a>
                  </div>
                </div>
              </div>
              <div className="form-group text-center mt-4 mb-3">
                <div className="col-xs-12">
                  <button className="btn btn-info d-block w-100 waves-effect waves-light" type="submit">Log In</button>
                </div>
              </div>
              {/* <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 mt-2 text-center">
                  <div className="social mb-3">
                    <a href="javascript:void(0)" className="btn  btn-facebook" data-bs-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fab fa-facebook-f" /> </a>{' '}
                    <a href="javascript:void(0)" className="btn btn-googleplus" data-bs-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fab fa-google" /> </a>
                  </div>
                </div>
              </div> */}
              <div className="form-group mb-0 mt-4">
                <div className="col-sm-12 justify-content-center d-flex">
                  <p>Register a new membership <Link to={'/signup'}  className="text-info font-weight-medium ms-1">Sign Up</Link></p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="recoverform">
        <div className="logo">
          <h3 className="font-weight-medium mb-3">Recover Password</h3>
          <span className="text-muted">Enter your Email and instructions will be sent to you!</span>
        </div>
        <div className="row mt-3 form-material">
          {/* Form */}
          <form className="col-12" action="index.html">
            {/* email */}
            <div className="form-group row">
              <div className="col-12">
                <input className="form-control" type="email" required placeholder="Username" />
              </div>
            </div>
            {/* pwd */}
            <div className="row mt-3">
              <div className="col-12">
                <button className="btn d-block w-100 btn-primary text-uppercase" type="submit" name="action">Reset</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default SignIn