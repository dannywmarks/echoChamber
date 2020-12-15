import React from 'react'
import { AppBar, Typography, Toolbar, Button, IconButton } from '@material-ui/core'
import { MenuIcon } from '@material-ui/icons/Menu'
import YouTubeIcon from '@material-ui/icons/YouTube';
import useStyles from './styles';
import { Link } from 'react-router-dom'
import EchoImg from '../../../images/blackEcho.jpg'

const Navbar = () => {

  const classes = useStyles()
  return (
    <AppBar className={classes.appBar} position='static' color='inherit' >

      <Typography className={classes.heading} variant='h2' align='center'>Chambers</Typography>
       <img className={classes.image}src={EchoImg} alt='echos' height="60" />
   
       
     </AppBar>
  )
}

export default Navbar
