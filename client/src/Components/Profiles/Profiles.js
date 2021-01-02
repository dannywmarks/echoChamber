import React, { useEffect } from 'react'
import { CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux"
import ProfileItem from './ProfileItem'
import { getProfiles } from '../../actions/profile'

const Profiles = () => {
  const dispatch = useDispatch()
  const profiles = useSelector((state) => state.profiles);
  const {loading} = profiles
  useEffect(() => {
    dispatch(getProfiles())
  }, [])

  console.log(profiles.profiles)

  return <>
    {loading ? <CircularProgress/> : <><h1>PROFILES</h1></>}
    <p>
      Browse and connect with developers
    </p>
    <div className="profiles">
      {profiles.profiles.length > 0 ? (
        profiles.profiles.map(profile => 
          <ProfileItem key={profile._id} profile={profile}/>)
      ) : <h4>No profiles found</h4>}
    </div>
  </>
}

export default Profiles
