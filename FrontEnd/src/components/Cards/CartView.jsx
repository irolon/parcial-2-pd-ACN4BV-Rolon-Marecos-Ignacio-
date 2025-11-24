import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';



const CartView = () => {
    const {cart, removeItem, clearCart} = useContext(CartContext);
  return (
    <div className="d-flex flex-column align-items-center mt-5 ">
        <h1 className='mt-5'>Carrito de Compras</h1>

        <div className="container-cart mt-5 d-flex flex-column justify-content-center align-items-center">
            {cart.map((item) => (                
                <div key={item.id} className="card-cart" style={{ maxWidth: '100%' }}>
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4">
                            <img 
                                src={item.img} 
                                className="img-fluid rounded-start" 
                                alt={item.nombre || item.marca + ' ' + item.modelo}
                                onError={(e) => {
                                    console.log('Error cargando imagen:', e.target.src);
                                    e.target.src = '/placeholder.svg'; 
                                }}
                                style={{ maxHeight: '150px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-8 d-flex  align-items-center">
                            <div className="d-flex ">
                                <p className="card-title m-4 text-center"><strong> {item.modelo}</strong></p>
                                <p className="card-text m-4 text-center"><strong>Cantidad:</strong> {item.cantidad}</p>
                                <p className="card-text m-4 text-center"><strong>Precio Unitario:</strong> ${item.precio}</p>
                                <p className="card-text m-4 text-center"><strong>Subtotal:</strong> ${item.precio * item.cantidad}</p>
                                
                            </div>
                            <button className='btn btn-danger' style={{height:'35px'}} onClick={() => removeItem(item.id)}>X</button>
                        </div>
                    </div>
                </div>
            ))}
            <div>
                <h2>Total: ${cart.reduce((total, item) => total + (item.precio * item.cantidad), 0).toFixed(2)}</h2>
            </div>
            <div>
                <Link to="/checkout" className='btn btn-primary btn-lg m-3' >Finalizar Compra</Link>
                <button className='btn btn-danger btn-lg m-3' onClick={clearCart}>Vaciar carrito</button>
            </div>
        </div>
    </div>



  )
}

export default CartView