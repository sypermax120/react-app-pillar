import axios from "axios";

const sercvice = axios.create({
    baseURL: `${process.env.REACT_APP_API}/tours`
})

const getAll = () => sercvice.get('')
const addTour = (tour: any) => sercvice.post('/', tour)
const deleteTour = (id: any) => sercvice.delete(id)

const TourAPI = {
    getAll,
    addTour,
    deleteTour,
}

export default TourAPI;
