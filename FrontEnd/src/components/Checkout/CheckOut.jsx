import React, { useState, useContext } from 'react'
import CardForm from '../Cards/CardForm'
import { CartContext } from '../../context/CartContext';
import { createOrder } from '../../service/api';
import { Link } from 'react-router-dom';
import EmptyCart from '../Cards/EmptyCart';



const CheckOut = () => {
  const [buyer, setBuyer] = useState({});
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);
  const {cart, total, clearCart } = useContext(CartContext);


  const buyerData =(e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    })
  }
  
  const finalizarCompra =  async (e) => {
    e.preventDefault();

    if(!buyer.nombre || !buyer.apellido || !buyer.direccion || !buyer.email || !buyer.repetirEmail) {
      setError('Por favor complete todos los campos');
      return;
    }
    if(!buyer.email || !buyer.repetirEmail || buyer.email !== buyer.repetirEmail){
      setError("Los correos no coinciden");
      return;
    } else {
      setError(null);
      let order = {
        comprador: buyer,
        items: cart,
        total: total(),
      };

      const response = await createOrder(order);

      if (response.success) {
        setOrderId(response.orderId);
        clearCart();
      }
    }
    
  }

  if(cart.length === 0 && !orderId) {
    return <EmptyCart />
  }


  return (
    <>
      {orderId ? (
        <div className='d-flex justify-content-center align-items-center vh-100'>
          <div className="alert alert-success text-center" role="alert">
            <h4 className="alert-heading">¡Gracias por su compra!</h4>
            <p>Su número de orden es: <strong>{orderId}</strong></p>
            <hr />
            <p className="mb-0">Le enviaremos un correo con los detalles de su compra.</p>
            <Link className="btn btn-primary mt-4" to="/">Volver al inicio</Link>
          </div>

        </div>
      ) : (
        <CardForm buyerData={buyerData} finalizarCompra={finalizarCompra} error={error} />
      )}
        
    </>

  )
}

export default CheckOut
