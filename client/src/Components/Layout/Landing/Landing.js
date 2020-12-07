import React, { useState, useEffect } from 'react'
import { Container, Grow, Grid, AppBar, Typography} from '@material-ui/core'
import Echos from '../../Echos/Echos'
import Form from '../../Forms/ChamberForm'
import { useDispatch } from 'react-redux'
import { getEchos } from '../../../actions/echos'
import useStyles from './styles'
import Navbar from '../Navbar/Navbar2'

const Landing = () => {
  const [currentId, setCurrentId] = useState(null)
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEchos())
  }, [currentId, dispatch])
  return (
   
    <Grow in>
      <Container>
        <Navbar/>
        <AppBar className={classes.appBar} position='static' color='inherit' >

        <Typography className={classes.heading} variant='h2' align='center'>Chambers</Typography>
        {/* <img className={classes.image}src={EchoImg} alt='echos' height="60" /> */}
        </AppBar>
        <Grid container className={classes.mainContainer} justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <Echos setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId}/>
              </Grid>
        </Grid>
      </Container>
  </Grow>
  )
}

export default Landing
