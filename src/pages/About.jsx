import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
    <div className="page-breadcrumb border-bottom">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-xs-12 justify-content-start d-flex align-items-center">
          <h5 className="font-weight-medium text-uppercase mb-0">About Page</h5>
        </div>
        <div className="col-lg-9 col-md-8 col-xs-12 d-flex justify-content-start justify-content-md-end align-self-center">
          <nav aria-label="breadcrumb" className="mt-2">
            <ol className="breadcrumb mb-0 p-0">
              <li className="breadcrumb-item"><Link to={'/'}>Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About Page</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div className="container-fluid page-content">
      <div className="row">
        <div className="col-12">
          <div className="card material-card">
            <div className="card-body">
              This is some text within a About Page.
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About