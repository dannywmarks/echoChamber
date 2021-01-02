import axios from "axios";

const CHAMBER_URL = "http://localhost:5000/chambers";
const ECHO_URL = "http://localhost:5000/echos"
const AUTH_URL = "http://localhost:5000/auth"


//chambers
export const getChambers = () => axios.get(CHAMBER_URL);
export const getChamber = (id) => axios.get(`${CHAMBER_URL}/${id}`)
export const createChamber = (newChamber) => axios.post(CHAMBER_URL, newChamber);
export const updateChamber = (id, updatedChamber) =>
  axios.patch(`${CHAMBER_URL}/${id}`, updatedChamber);
export const deleteChamber = (id) => axios.delete(`${CHAMBER_URL}/${id}`);
export const likeChamber = (id) => axios.patch(`${CHAMBER_URL}/${id}/likeChamber`);


//echos
export const fetchEchos = () => axios.get(ECHO_URL);
export const fetchEchosId = (id) => axios.get(`${ECHO_URL}/${id}`)
export const createEcho = (id,newEcho) => axios.post(`${CHAMBER_URL}/${id}/echo`, newEcho, );
export const updateEcho = (id, updatedEcho) =>
  axios.patch(`${CHAMBER_URL}/:id/echo/${id}`, updatedEcho);
export const deleteEcho = (id) => axios.delete(`${CHAMBER_URL}/:id/echo/${id}`);


//auth
export const loadUser = () => axios.get("/auth");
export const loginUser = (body) => axios.post("/auth", body)
export const register = (body, config) => axios.post("/users", body, config)

//profile
export const getCurrentProfile = () => axios.get("profile/me")
export const getProfiles = () => axios.get("/profile")
export const createProfile = (formData, config) => axios.post("/profile", formData, config)
// need to make routes
export const getProfileByUserId = (userId) => axios.get(`/profile/user/${userId}`)
export const getChambersByUsername = (username) => axios.get(`/profile/chambers/${username}`)