import React from 'react'
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center" style={{ minHeight: '80vh',height: '100%',position: 'relative'}}>
        <div>
          <h1 className="mb-4">El carrito está vacío</h1>
          <Link to="/" className='btn btn-dark btn-lg m-5'>Volver al inicio</Link>
        </div>
    </div>
  )
}

export default EmptyCart