import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentProfile } from '../../actions/profile'
import DashboardActions from './DashboardActions'

const Dashboard = () => {
  const dispatch = useDispatch()
  const profile =  useSelector(state => state.profile)
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, [])
  console.log(profile)

  
  return (
    profile.loading && profile.profile === null ? <CircularProgress/> : 
    <>
    <h1>Dashboard</h1>
    <p>Welcome { auth.user && auth.user.name }</p>
    {profile.profile !== null ? <> <DashboardActions /></> :
    
    <>
    <p>You have not yet setup profile, please add some info</p>
    <Link to='/create-profile'>Create Profile</Link>
    </>}
   
    </>
  )
}

export default Dashboard
