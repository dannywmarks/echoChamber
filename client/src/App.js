import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { getEchos } from './actions/echos'
import EchoImg from './images/blackEcho.jpg'
import Echos from './Components/Echos/Echos'
import Form from './Components/Form/Form'
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEchos)
  }, [dispatch])

  return (
   <Container maxwidth='lg'>
     <AppBar className={classes.appBar} position='static' color='inherit' >
       <Typography className={classes.heading} variant='h2' align='center'>Echo Chamber</Typography>
       <img className={classes.image}src={EchoImg} alt='echos' height="60" />
     </AppBar>
     <Grow in>
       <Container>
         <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <Echos />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
         </Grid>
       </Container>
     </Grow>
   </Container>
  )
}

export default App
