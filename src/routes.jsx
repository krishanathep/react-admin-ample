import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { RequireAuth } from "react-auth-kit";
import WithNavbar from './layouts/WithNavbar';
import WithOutNavbar from './layouts/WithOuteNavbar'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import Home from './pages/Home';
import About from './pages/About'

const routes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<WithOutNavbar/>}>
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
        </Route>
        <Route 
          element={
            <RequireAuth loginPath={"/signin"}>
              <WithNavbar/>
            </RequireAuth> 
          }>
          <Route exact path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default routes