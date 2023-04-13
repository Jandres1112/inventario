import { axiosInstance } from '../helpers/axios-config';

const getMarca = () => {

    return axiosInstance.get('marca', {
        headers: {
            'Conten-type': 'application/json'
        }
    })

}

export {
    getMarca
}