import React, {useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import { TextField, Button, Typography, Paper, Container} from '@material-ui/core'
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/auth'
import { setAlert } from '../../actions/alert'

const LoginForm = () => {
  const classes = useStyles();
  const initialState = {
    email: '',
    password: '',
  }

  const [userLoginData, setUserLoginData] = useState(initialState)
  const { email, password } = userLoginData;
  const alert = useSelector((state) => state.alert)
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if(user) setEchoData(user)
  // }, [user])

  const handleSubmit = e => {
    e.preventDefault()
    console.log(isAuthenticated)
   
      dispatch(login(email, password))
    
    clear()
  }

  const handleChange = e => {
    const {name, value} = e.target
    setUserLoginData(e => ({ ...e, [name]: value}))
  }

  const clear = () => {
    setUserLoginData(initialState)
  }

 // Redirect if loggedin
 if(isAuthenticated) {
   return <Redirect to="echos" />
 }

  return (
    <Container>
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
    
        
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
        
         <Button 
          className={classes.buttonSubmit} 
          variant="contained" 
          color="primary" 
          size="large" 
          type="submit" 
          fullWidth
          >
            Login
        </Button>
      </form>
    </Paper>
    </Container>
    
  )
}

export default LoginForm