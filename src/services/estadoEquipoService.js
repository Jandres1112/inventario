import { axiosInstance } from '../helpers/axios-config';

const getEstadoequipo = () => {

    return axiosInstance.get('Estadoequipo', {
        headers: {
            'Conten-type': 'application/json'
        }
    })

}

export {
    getEstadoequipo
}