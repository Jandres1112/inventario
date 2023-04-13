import { axiosInstance } from '../helpers/axios-config';

const getInventarios = () => {
    return axiosInstance.get ('inventario', {
        headers: {
            'Conten-type': 'application/json'
        }
    });
}

const crearInventario = (data) => {
    return axiosInstance.post ('inventario', data, {
        headers: {
            'Conten-type': 'application/json'
        }
    });
}

const editInventario = (inventarioId, data) => {
    return axiosInstance.put(`inventario/${inventarioId}`, data, {
        headers: {
            'Conten-type': 'application/json'
        }
    });
}

export{
    getInventarios, crearInventario, editInventario
}