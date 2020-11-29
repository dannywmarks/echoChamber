import React from 'react'
import { useSelector } from 'react-redux'
import Echo from './Echo/Echo'
import useStyles from './styles';

const Echos = () => {
  const echos = useSelector((state) => state.echos)
  const classes = useStyles();

  console.log(echos)
  return (

      <>
      <h1>ECHOS</h1>
      <Echo />
      <Echo />
      </>
    
  )
}

export default Echos
