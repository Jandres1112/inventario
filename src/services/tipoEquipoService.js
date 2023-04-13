import { axiosInstance } from '../helpers/axios-config';

const gettipoEquipo = () => {

    return axiosInstance.get('tipoEquipo', {
        headers: {
            'Conten-type': 'application/json'
        }
    })

}

export {
    gettipoEquipo
}