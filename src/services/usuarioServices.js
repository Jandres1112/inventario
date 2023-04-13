import { axiosInstance } from '../helpers/axios-config';

const getUsuarios = () => {

    return axiosInstance.get('usuario', {
        headers: {
            'Conten-type': 'application/json'
        }
    })

}

export {
    getUsuarios
}