import axios from 'axios';


const URL = 'http://localhost:5000/chambers'

export const fetchChambers = () => axios.get(URL)
export const createChamber = (newChamber) => axios.post(URL, newChamber);
export const updateChamber = (id, updatedChamber) => axios.patch(`${URL}/${id}`, updatedChamber)
export const deleteChamber = (id) => axios.delete(`${URL}/${id}`)
export const likeChamber = (id) => axios.patch(`${URL}/${id}/likeChamber`)