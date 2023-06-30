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
    <>
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={{background: 'url(/ample/src/assets/images/big/auth-bg.jpg) no-repeat center center'}}>
      <div className="auth-box p-4 bg-white rounded">
        <div>
          <div className="logo text-center">
            <span className="db"><img src="/ample/src/assets/images/logos/logo-icon.png" alt="logo" /></span>
            <h5 className="font-weight-medium mb-3 mt-1">Sign In to Admin</h5>
          </div>
          <div className="row mt-4">
            <div className="col-12">
              <form className="form-horizontal" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control form-input-bg" id="tb-remail" placeholder="john@gmail.com" {...register("email", { required: true })} />
                  <label htmlFor="tb-remail">Email</label>
                  <div className="invalid-feedback">
                    Email is required
                  </div>
                  {errors.email && <span className="text-danger">This Email field is required</span>}
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control form-input-bg" id="text-rpassword" placeholder="*****" {...register("password", { required: true })} />
                  <label htmlFor="text-rpassword">Password</label>
                  <div className="invalid-feedback">
                    Password is required
                  </div>
                  {errors.password && <span className="text-danger">This Passwrd field is required</span>}
                </div>
                <div className="checkbox checkbox-primary mb-3">
                  <input id="checkbox-signup" type="checkbox" className="chk-col-indigo material-inputs" />
                  <label htmlFor="checkbox-signup"> I agree to all <a href="#">Terms</a></label>
                </div>
                <div className="d-flex align-items-stretch">
                  <button type="submit" className="btn btn-info d-block w-100">Sign up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default SignIn