import React from 'react'
import { Route, Switch, Redirect } from "react-router-dom";
import Privateroute from "../Routing/PrivateRoute";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/profiles" component={Profiles}></Route>
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/chambers/:id' component={Echos} />
        <PrivateRoute exact path='/create-profile' component={CreateProfile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/echos' component={Echos} />
        <PrivateRoute exact path='/youtube' component={Youtube} />
        <Redirect to='/' />
      </Switch>
      
    </div>
  )
}

export default Routes
