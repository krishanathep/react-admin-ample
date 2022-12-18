import React from 'react'

function SignUp() {
  return (
    <div className="main-wrapper">
  {/* ============================================================== */}
  {/* Preloader - style you can find in spinners.css */}
  {/* ============================================================== */}
  <div className="preloader">
    <svg className="tea lds-ripple" width={37} height={48} viewBox="0 0 37 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z" stroke="#233242" strokeWidth={2} />
      <path d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34" stroke="#233242" strokeWidth={2} />
      <path id="teabag" fill="#233242" fillRule="evenodd" clipRule="evenodd" d="M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z" />
      <path id="steamL" d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" stroke="#233242" />
      <path id="steamR" d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13" stroke="#233242" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
  {/* ============================================================== */}
  {/* Preloader - style you can find in spinners.css */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* Login box.scss */}
  {/* ============================================================== */}
  <div className="auth-wrapper d-flex no-block justify-content-center align-items-center" style={{background: 'url(src/assets/ample/src/assets/images/big/auth-bg.jpg) no-repeat center center'}}>
    <div className="auth-box p-4 bg-white rounded">
      <div>
        <div className="logo text-center">
          <span className="db"><img src="src/assets/ample/src/assets/images/logos/logo-icon.png" alt="logo" /></span>
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
  {/* ============================================================== */}
  {/* Login box.scss */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* Page wrapper scss in scafholding.scss */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* Page wrapper scss in scafholding.scss */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* Right Sidebar */}
  {/* ============================================================== */}
  {/* ============================================================== */}
  {/* Right Sidebar */}
  {/* ============================================================== */}
</div>

  )
}

export default SignUp