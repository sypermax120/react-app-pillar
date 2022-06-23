import axios from "axios";

const sercvice = axios.create({
    baseURL: `${process.env.REACT_APP_API}/users`
})

const getUser = () => sercvice.get('')
const addUser = (user: any) => sercvice.post('/', user)

const UsersAPI = {
    getUser,
    addUser,
}

export default UsersAPI;
