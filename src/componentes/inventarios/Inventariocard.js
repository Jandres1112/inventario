import React from 'react'
import {Link} from 'react-router-dom'

export const Inventariocard = (props) => {
    const {inventario} = props;
  return (
    <div className="col">
            <div className="card">
              <img src={inventario.foto} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Caracteristícas</h5>
                <hr/>
                <p className="card-text">Serial: {inventario.serial}</p>
                <p className="card-text">Estado: {inventario.marca.estado}</p>
                <p className="card-text">Modelo: {inventario.modelos}</p>   
                <p className="card-text">Color : {inventario.color}</p>               
                <p className="card-text">Marca :{inventario.marca.nombre}</p>
                <p className="card-text">{inventario.descripcion}</p> 
                <p className="card-text">
                <Link to={`/inventarios/edit/${inventario._id}`}>Ver Mas...</Link>
                </p>
                
              </div>
            </div>
          </div>
  )
}
