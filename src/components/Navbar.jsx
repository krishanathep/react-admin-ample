import React from 'react'

function Navbar() {
  return (
    <>
    <header className="topbar">
    <nav className="navbar top-navbar navbar-expand-md navbar-dark">
      <div className="navbar-header border-end">
        <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i className="ti-menu ti-close" /></a>
        <a className="navbar-brand" href="index.html">
          <b className="logo-icon">
            <img src="ample/src/assets/images/logos/logo-icon.png" alt="homepage" className="dark-logo" />
            <img src="ample/src/assets/images/logos/logo-light-icon.png" alt="homepage" className="light-logo" />
          </b>
          <span className="logo-text">
            <img src="ample/src/assets/images/logos/logo-text.png" alt="homepage" className="dark-logo" />
 
            <img src="ample/src/assets/images/logos/logo-light-text.png" className="light-logo" alt="homepage" />
          </span>
        </a>
        <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="ti-more" /></a>
      </div>
      <div className="navbar-collapse collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto">
          <li className="nav-item d-none d-md-block"><a className="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i className="mdi mdi-menu fs-5" /></a></li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle waves-effect waves-dark" href id={2} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fs-5 mdi mdi-gmail" />
              <div className="notify">
                <span className="heartbit" />
                <span className="point" />
              </div>
            </a>
            <div className="dropdown-menu mailbox dropdown-menu-start dropdown-menu-animate-up" aria-labelledby={2}>
              <ul className="list-style-none">
                <li>
                  <div className="border-bottom rounded-top py-3 px-4">
                    <div className="mb-0 font-weight-medium fs-4">You have 4 new messages</div>
                  </div>
                </li>
                <li>
                  <div className="message-center message-body position-relative" style={{height: 230}}>
                    {/* Message */}
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="user-img position-relative d-inline-block"> <img src="ample/src/assets/images/users/1.jpg" alt="user" className="rounded-circle w-100" /> <span className="profile-status rounded-circle online" /> </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Pavan kumar</h5> <span className="fs-2 text-nowrap d-block time text-truncate fw-normal mt-1">Just see
                          the my admin!</span> <span className="fs-2 text-nowrap d-block subtext text-muted">9:30 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="user-img position-relative d-inline-block"> <img src="ample/src/assets/images/users/2.jpg" alt="user" className="rounded-circle w-100" /> <span className="profile-status rounded-circle busy" /> </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Sonu Nigam</h5> <span className="fs-2 text-nowrap d-block time text-truncate">I've sung
                          a song! See you at</span> <span className="fs-2 text-nowrap d-block subtext text-muted">9:10 AM</span>
                      </div>
                    </a>
                    {/* Message *src/assets/ample/src
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="user-img position-relative d-inline-block"> <img src="src/assets/ample/src/assets/images/users/3.jpg" alt="user" className="rounded-circle w-100" /> <span className="profile-status rounded-circle away" /> </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Arijit Sinh</h5> <span className="fs-2 text-nowrap d-block time text-truncate">I am a
                          singer!</span> <span className="fs-2 text-nowrap d-block subtext text-muted">9:08 AM</span>
                      </div>
                    </a>
                    {/* Message */}
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="user-img position-relative d-inline-block"> <img src="ample/src/assets/images/users/4.jpg" alt="user" className="rounded-circle w-100" /> <span className="profile-status rounded-circle offline" /> </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Pavan kumar</h5> <span className="fs-2 text-nowrap d-block time text-truncate">Just see
                          the my admin!</span> <span className="fs-2 text-nowrap d-block subtext text-muted">9:02 AM</span>
                      </div>
                    </a>
                  </div>
                </li>
                <li>
                  <a className="nav-link border-top text-center text-dark pt-3" href="javascript:void(0);"> <b>See all e-Mails</b> <i className="fa fa-angle-right" /> </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle waves-effect waves-dark" href data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="mdi mdi-check-circle fs-5" />
              <div className="notify">
                <span className="heartbit" />
                <span className="point" />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-start mailbox dropdown-menu-animate-up">
              <ul className="list-style-none">
                <li>
                  <div className="border-bottom rounded-top py-3 px-4">
                    <div className="mb-0 font-weight-medium fs-4">Notifications</div>
                  </div>
                </li>
                <li>
                  <div className="message-center notifications position-relative" style={{height: 230}}>
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="btn btn-light-danger text-danger btn-circle">
                        <i data-feather="link" className="feather-sm fill-white" />
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Luanch Admin</h5> <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">Just see
                          the my new admin!</span> <span className="fs-2 text-nowrap d-block subtext text-muted">9:30 AM</span>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="btn btn-light-success text-success btn-circle">
                        <i data-feather="calendar" className="feather-sm fill-white" />
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Event today</h5> <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">Just a
                          reminder that you have event</span> <span className="fs-2 text-nowrap d-block subtext text-muted">9:10 AM</span>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="btn btn-light-info text-info btn-circle">
                        <i data-feather="settings" className="feather-sm fill-white" />
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Settings</h5> <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">You can
                          customize this template as you want</span> <span className="fs-2 text-nowrap d-block subtext text-muted">9:08 AM</span>
                      </div>
                    </a>
                    <a href="javascript:void(0)" className="message-item d-flex align-items-center border-bottom px-3 py-2">
                      <span className="btn btn-light-primary text-primary btn-circle">
                        <i data-feather="users" className="feather-sm fill-white" />
                      </span>
                      <div className="w-75 d-inline-block v-middle ps-3">
                        <h5 className="message-title mb-0 mt-1 fs-3 fw-bold">Pavan kumar</h5> <span className="fs-2 text-nowrap d-block time text-truncate fw-normal text-muted mt-1">Just see
                          the my admin!</span> <span className="fs-2 text-nowrap d-block subtext text-muted">9:02 AM</span>
                      </div>notifications
                    </a>
                  </div>
                </li>
                <li>
                  <a className="nav-link border-top text-center text-dark pt-3" href="javascript:void(0);"> <strong>Check all notifications</strong> <i className="fa fa-angle-right" /> </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="ample/src/assets/images/users/1.jpg" alt="user" className="rounded-circle" width={36} />
              <span className="ms-2 font-weight-medium">Krishanathep.J</span><span className="fas fa-angle-down ms-2" />
            </a>
            <div className="dropdown-menu dropdown-menu-end user-dd dropdown-menu-animate-up" aria-labelledby={2}>
              <div className="d-flex no-block align-items-center p-3 bg-info text-white mb-2">
                <div className><img src="ample/src/assets/images/users/1.jpg" alt="user" className="rounded-circle" width={60} /></div>
                <div className="ms-2">
                  <h4 className="mb-0 text-white">Krishanathep.J</h4>
                  <p className=" mb-0">krishanathep@gmail.com</p>
                </div>
              </div>
              <a className="dropdown-item" href="#"><i className="text-success mdi mdi-account" /> My Profile</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#"><i className="text-danger mdi mdi-logout" /> Logout</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header> 
</>
  )
}

export default Navbar