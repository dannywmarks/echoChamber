import React, { useEffect } from 'react'
import { Container } from '@material-ui/core'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './Components/Layout/Navbar/Navbar'
import Navbar2 from './Components/Layout/Navbar/Navbar2'
import { loadUser } from './actions/auth'
import setAuthToken from './utils/setAuthToken'
import Landing from './Components/Layout/Landing/Landing2'
import Login from './Components/Auth/Login'
import Landing2 from './Components/Layout/Landing/Landing'
import Youtube from './Components/Layout/Landing/Youtube'
import Register from './Components/Auth/Register'
import store from './store'

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () => {
// check for token in LS
useEffect(() => {
  if(localStorage.token) {
    setAuthToken(localStorage.token)
  }
  store.dispatch(loadUser())
},[]) 



  return (
    <Router>
      
      <Navbar2 />
      {/* <Alerts /> */}
      <Container>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/chambers' component={Landing2}/>
      <Container maxwidth='lg'>
          {/* <Navbar /> */}
          
          <Switch>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
          </Switch>
        
        </Container>
     
      </Container>
     
      
    </Router>
  
  )
}

export default App
