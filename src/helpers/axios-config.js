import axios from "axios";

const axiosInstance = axios.create({
     baseURL: 'https://inventarios-backend-production.up.railway.app/inventario'
});

export{
    axiosInstance
}
