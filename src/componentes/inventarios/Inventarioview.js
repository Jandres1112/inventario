import React, {useState, useEffect} from 'react';
import { getInventarios } from '../../services/inventarioservice';
import { Inventariocard } from './Inventariocard';
import { Inventarionew } from './Inventarionew';
export const Inventarioview = () => {
  const [inventarios, setInventarios] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const listarInventarios = async () => {
  
    try {
      const {data} = await getInventarios();
      console.log(data);
      setInventarios(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarInventarios();
  }, []);

 const handleopenModal = () => {
     setOpenModal(!openModal)
 }
 

  return (
    <div className='container'>
    <div className="mt-2 mb-2 row row-cols-1 row-cols-md-5 g-4">
    {
       inventarios.map((inventario) => {
          return < Inventariocard key={inventario._id} inventario={inventario} />;
            })

    }
    </div>
       {
      openModal ? <Inventarionew 
                handleopenModal={handleopenModal}
                listarInventarios={listarInventarios}/>:
      (<button className='btn btn-primary fab' onClick={handleopenModal}>
      <i className="fa-solid fa-plus"></i>
      </button>)
      }
    </div>
       
  )
}

