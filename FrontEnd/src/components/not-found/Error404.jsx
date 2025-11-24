import React from 'react'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <h2 className='text-center mt-5'>404 - Página no encontrada</h2>
      <Link to="/" className='btn btn-primary mt-5'>Volver al inicio</Link>
    </div>
  )
}

export default Error404