import React from 'react'
import { Link } from 'react-router-dom'

const DashboardActions = () => {
  return (
    <div>
      <Link to='/edit-profile'>Edit Profile</Link>
      <Link to='/add-echo'>Add Echo</Link>
    </div>
  )
}

export default DashboardActions
