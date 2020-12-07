import axios from 'axios';


const URL = 'http://localhost:5000/echos'

export const fetchEchos = () => axios.get(URL)
export const createEcho = (newEcho) => axios.post(URL, newEcho);
export const updateEcho = (id, updatedEcho) => axios.patch(`${URL}/${id}`, updatedEcho)
export const deleteEcho = (id) => axios.delete(`${URL}/${id}`)
export const likeEcho = (id) => axios.patch(`${URL}/${id}/likeEcho`)