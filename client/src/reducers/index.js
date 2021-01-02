import { combineReducers } from "redux";
import chambers from "./chambers";
import echos from "./echos";
import alert from "./alert";
import auth from "./auth";
import youtube from "./youtube";
import profiles from "./profile";

export default combineReducers({ chambers, echos, alert, auth, youtube, profiles });
