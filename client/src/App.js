import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Alerts from './Components/Layout/Alert/Alert'
import Navbar2 from "./Components/Layout/Navbar/Navbar2";
import Dashboard from './Components/Dashboard/Dashboard'
import PrivateRoute from './Components/Routing/PrivateRoute'
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Landing from "./Components/Layout/Landing/Landing2";
import CreateProfile from './Components/Forms/ProfileForm'
import EditProfile from './Components/Forms/EditProfileForm'
import Profiles from './Components/Profiles/Profiles'
import Echos from './Components/Layout/Landing/EchoPlatform/EchoPlatform'
import Login from "./Components/Auth/Login";
import Landing2 from "./Components/Layout/Landing/Landing";
import Youtube from "./Components/Layout/Landing/Youtube";
import Register from "./Components/Auth/Register";
import store from "./store";


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  // check for token in LS

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Router>
      <Navbar2 />
      <Alerts />
      <Container>
        <Route exact path="/" component={Landing} />
        <Route exact path="/chambers" component={Landing2} />
        <Container maxwidth="lg">
          {/* <Navbar /> */}

          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/profiles" component={Profiles}></Route>
            <PrivateRoute exact path='/dashboard' component={Dashboard} />
            <PrivateRoute exact path='/chambers/:id' component={Echos} />
            <PrivateRoute exact path='/create-profile' component={CreateProfile} />
            <PrivateRoute exact path='/edit-profile' component={EditProfile} />
            <PrivateRoute exact path='/echos' component={Echos} />
            <PrivateRoute exact path='/youtube' component={Youtube} />
          </Switch>
        </Container>
      </Container>
    </Router>
  );
};

export default App;
