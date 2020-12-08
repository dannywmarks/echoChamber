import React, {useState} from 'react'
import { Grid, Container, Typography, Button } from '@material-ui/core'
import twilightZone from '../../../images/oc-twilight-zone.jpg'
import rabbit from '../../../images/rabbit2.png'
import Welcome from '../../Layout/Welcome/Welcome'
import Login from '../../Auth/Login'
import Register from '../../Auth/Register'
import Alerts from '../Alert/Alert'
import Youtube from '../../Youtube/YoutubeList/YoutubeList'



const Landing2 = () => {
  const [registerOrLogin, setRegisterOrLogin] = useState(false)

  const handleOnClick = () => {
    setRegisterOrLogin(!registerOrLogin)
  }

  return (
    <div>
      <Grid container style={{minHeight: '100vh'}}>
        <Grid item xs={12} sm={6}>
        {/* <Youtube/> */}

        <img
            src={twilightZone}
            style={{ width: '100%', height: '100%', objectFit: 'cover'}}
            alt="twilight zone"
          />
{/* 
        { registerOrLogin === true  ? <img
            src={twilightZone}
            style={{ width: '100%', height: '100%', objectFit: 'cover'}}
            alt="twilight zone"
          /> : <Welcome/>} */}
          
          
        </Grid>
        <Grid container item xs={12} sm={6} alignItems='center' direction='column' justify="space-between" style={{padding: 10}}>
          <Alerts/>
        
          <div />
          <h1 style={{ fontFamily: 'TwyliteZone', fontSize: '50px'}}>The Echo Chamber</h1>
          <div>
            <Grid container justify="center">
             <div>
              <img src={rabbit} width={200} alt='rabbit' style={{marginBottom: 20, padding: 20, display: 'block'}} />
             </div>
              
      
              { registerOrLogin === true  ? <Login />  : <Register /> }
              
              <Button onClick={handleOnClick}>{ registerOrLogin === true  ? 'Register an account'  : 'Already have account'  }</Button>
            </Grid>
          </div>
          <div />
          
        </Grid>
      </Grid>
    </div>
  )
}

export default Landing2
