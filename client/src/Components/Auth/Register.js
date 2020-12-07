import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { setAlert } from '../../actions/alert'
import { register } from '../../actions/auth'
import { Redirect } from 'react-router-dom'
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core'
import useStyles from './styles';
import axios from 'axios';



const RegisterForm = () => {
  const alert = useSelector((state) => state.alert)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  const classes = useStyles();
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirm: '',
  }

  const [userData, setUserData] = useState(initialState)

  // useEffect(() => {
  //   if(user) setEchoData(user)
  // }, [user])

  const { name, email, password, confirm } = userData;

  const handleSubmit = async e => {
    e.preventDefault()
    if(password !== confirm){
      console.log(alert)
      dispatch(setAlert("THEY DONT MATCH", "danger"))
      
    } else {
      dispatch(register({ name, email, password }))
    // clear()
  }
}

  const handleChange = e => {
    const {name, value} = e.target
    setUserData(e => ({ ...e, [name]: value}))
  }

  const clear = () => {
    setUserData(initialState)
  }

  if(isAuthenticated) {
    return <Redirect to='/echos' />
  }

  
  return (
    <Container>
      
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <TextField 
          name='name' 
          variant='outlined' 
          label='Name' 
          fullWidth
          value={name}
          onChange={handleChange}/>
        <TextField 
          name='email' 
          variant='outlined' 
          label='Email' 
          fullWidth
          value={email}
          onChange={handleChange}/>
        <TextField 
          name='password' 
          variant='outlined' 
          label='Password' 
          fullWidth
          value={password}
          onChange={handleChange}/>
        <TextField 
          name='confirm' 
          variant='outlined' 
          label='Confirm' 
          fullWidth
          value={confirm}
          onChange={handleChange}/>
        
         <Button 
          className={classes.buttonSubmit} 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit" 
          fullWidth
          >
            Register
        </Button>
       
      </form>
    </Paper>
    </Container>
    
  )
}


export default RegisterForm;
