import React from 'react'
import { Outlet } from 'react-router-dom'

function WithOuteNavbar() {
  return (
    <>
      <Outlet/>
    </>
  )
}

export default WithOuteNavbar