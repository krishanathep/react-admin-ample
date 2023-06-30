import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
  return (
  <>
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={{background: 'url(/ample/src/assets/images/big/auth-bg.jpg) no-repeat center center'}}>
      <div className="auth-box p-4 bg-white rounded">
        <div>
          <div className="logo text-center">
            <span className="db"><img src="/ample/src/assets/images/logos/logo-icon.png" alt="logo" /></span>
            <h5 className="font-weight-medium mb-3 mt-1">Sign Up to Admin</h5>
          </div>
          {/* Form */}
          <div className="row mt-4">
            <div className="col-12">
              <form className="form-horizontal" action="index.html">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control form-input-bg" id="tb-rfname" placeholder="john deo" required />
                  <label htmlFor="tb-rfname">Full Name</label>
                  <div className="invalid-feedback">
                    Full name is required
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control form-input-bg" id="tb-remail" placeholder="john@gmail.com" required />
                  <label htmlFor="tb-remail">Email</label>
                  <div className="invalid-feedback">
                    Email is required
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control form-input-bg" id="text-rpassword" placeholder="*****" required />
                  <label htmlFor="text-rpassword">Password</label>
                  <div className="invalid-feedback">
                    Password is required
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control form-input-bg" id="text-rcpassword" placeholder="*****" required />
                  <label htmlFor="text-rcpassword">Confirm Password</label>
                  <div className="invalid-feedback">
                    Password is required
                  </div>
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

export default SignUp