import axios from "axios";

const sercvice = axios.create({
    baseURL: `${process.env.REACT_APP_API}/history`
})

const getHistory = () => sercvice.get('')
const addHistory = (history: any) => sercvice.post('/', history)

const HistoryAPI = {
    getHistory,
    addHistory,
}

export default HistoryAPI;
