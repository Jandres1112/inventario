import React, {useEffect, useState} from 'react'
import {getUsuarios} from '../../services/usuarioServices';
import {getMarca} from '../../services/marcaService';
import {gettipoEquipo} from '../../services/tipoEquipoService';
import {getEstadoequipo} from '../../services/estadoEquipoService'; 
import { crearInventario } from '../../services/inventarioservice';
import Swal from 'sweetalert2';
 
export const Inventarionew = ({handleopenModal, listarInventarios}) => {
  const [usuarios,setUsuarios] = useState([]);
  const [marcas,setMarcas] = useState([]);
  const [tipos,setTipos] = useState([]);
  const [estados,setEstados] = useState([]);
  const [valoresforms,setvaloresforms] = useState([]);
  const { serial='', modelo='', descripcion='', color='', foto='', fechacompra='', precio='',
   usuario, marca, tipo, estado} = valoresforms;

  const listarUsuarios = async () => {
    try {
      const {data}   = await getUsuarios();
      setUsuarios(data);
 } catch (error) {
   console.log(error);
 }
}
  useEffect(() =>{
    listarUsuarios();
  },[])

  const listarMarcas = async () => {
    try {
      const {data}   = await getMarca();
      setMarcas(data);
 } catch (error) {
   console.log(error);
 }
  }

  useEffect(() =>{
    listarMarcas();
  },[])
  const listarTipos = async () => {
    try {
      const {data}   = await gettipoEquipo();
      setTipos(data);
 } catch (error) {
   console.log(error);
 }
  }
  useEffect(  () =>{
    listarTipos();
  },[])
   const lisEstados = async () => {
    try {
      const {data}   = await getEstadoequipo();
      setEstados(data);
 } catch (error) {
   console.log(error);
 }
   }
  useEffect(  () =>{
    lisEstados();
  },[])

  const handleOnchange = ({target}) => {
    const { name, value } = target;
    setvaloresforms({...valoresforms, [name]: value})
  }
  const hangleOnsubmit = async (e) => {
    e.preventDefault();
    const inventario = {
      serial, modelo, descripcion, color, foto,
      fechacompra, precio,
      usuario: {
        _id: usuario
      },
      marca: {
        _id: marca
      },
      TipoEquipo: {
        _id: tipo
      },
      EstadoEquipo: {
         _id: estado
      }
    }
    console.log(inventario)
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando'
      })
      Swal.showLoading();    
      const {data} = await crearInventario(inventario);
      console.log(data);
      Swal.close();
      handleopenModal();
      listarInventarios();
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='sidebar'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className='siderbar-header'>
              <h3>Nuevo inventario</h3>
              <i className="fa-solid fa-xmark" onClick={handleopenModal}></i>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
           <hr/>
          </div>
        </div>
        <form onSubmit={(e) => hangleOnsubmit(e)}>
          <div className='row'>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Serial</label>
          <input type="text" value={serial}  name='serial'
            required
           onChange={(e) => handleOnchange(e)}
            className="form-control"  />

          </div>
           </div>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Modelo</label>
          <input type="text" value={modelo} name='modelo'
            required 
            onChange={(e) => handleOnchange(e)}
             className="form-control"  />
          </div>
           </div>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Descripción</label>
          <input type="text" value={descripcion} name='descripcion'
          required
          onChange={(e) => handleOnchange(e)}
          className="form-control"  />
          </div>
           </div>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Color</label>
          <input type="text" value={color} name='color'
          required 
          onChange={(e) => handleOnchange(e)}
          className="form-control"  />
          </div>
           </div>
          </div>
          <div className='row'>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Foto</label>
          <input type="text" value={foto} name='foto'
          required 
          onChange={(e) => handleOnchange(e)}
          className="form-control"  />
          </div>
           </div>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Fecha Compra</label>
          <input type="date" value={fechacompra} name='fechacompra'
          required 
          onChange={(e) => handleOnchange(e)}
          className="form-control"  />
          </div>
           </div>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Precio</label>
          <input type="number" value={precio} name='precio' 
          required
          onChange={(e) => handleOnchange(e)}
          className="form-control"  />
          </div>
           </div>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Usuario</label>
          <select className="form-select" onChange={(e) => handleOnchange(e)}
            required
            name='usuario'
            value={usuario} >
             
            <option value=''>--SELECCIONE--</option>
            
            {
              usuarios.map(({_id, nombre}) => {
               return <option key={_id} value={_id} >{nombre}</option>
              })
            }
          </select>
          
          </div>
           </div>
          </div>
          <div className='row'>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Marca</label>
          <select className="form-select" onChange={(e) => handleOnchange(e)}
            required
            name='marca' 
            value={marca}>
            <option value=''>--SELECCIONE--</option>
            {
              marcas.map(({_id, nombre}) => {
               return <option key={_id} value={_id} >{nombre}</option>
              })
            }
           
          </select>
               
          </div>
          <div className='row'>
              <div className='col'>
                <button className='btn btn-primary'>Guardar</button>
                
              </div>
            </div>
           </div>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Tipo Equipo</label>
          <select className="form-select" onChange={(e) => handleOnchange(e)}
            required
            name='tipo' 
            value={tipo}>
            <option value=''>--SELECCIONE--</option>
            {
              tipos.map(({_id, nombre}) => {
               return <option key={_id} value={_id} >{nombre}</option>
              })
            }
          </select>
          </div>
           </div>
           <div className='col'>
           <div className="mb-3">
          <label  className="form-label">Estado equipo</label>
          <select className="form-select" onChange={(e) => handleOnchange(e)}
            required
            name='estado' 
            value={estado}>
            <option value=''>--SELECCIONE--</option>
            {
              estados.map(({_id, nombre}) => {
               return <option key={_id} value={_id} >{nombre}</option>
              })
            }
          </select>
          </div>
           </div>
             </div>
          
        </form>
      </div>
    </div>
  )
}
