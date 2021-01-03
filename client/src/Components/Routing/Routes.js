import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "../Routing/PrivateRoute";
import Home from "../Layout/Home/Home";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import About from "../About/About";
import Profiles from "../Profiles/Profiles";
import Dashboard from "../Dashboard/Dashboard";
import Echos from "../Layout/Landing/EchoPlatform/EchoPlatform";
import Youtube from "../Layout/Landing/Youtube";
import CreateProfile from "../Forms/ProfileForm";
import EditProfile from "../Forms/EditProfileForm";
import Landing from '../Layout/Landing/Landing'
import Landing2 from '../Layout/Landing/Landing2'

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing2} />
        <Route exact path="/chambers" component={Landing} />
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/profiles" component={Profiles}></Route>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/chambers/:id" component={Echos} />
        <PrivateRoute exact path="/create-profile" component={CreateProfile} />
        <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        <PrivateRoute exact path="/echos" component={Echos} />
        <PrivateRoute exact path="/youtube" component={Youtube} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Routes;
