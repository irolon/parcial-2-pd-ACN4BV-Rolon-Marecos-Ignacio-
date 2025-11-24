import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import EmptyCart from './EmptyCart';
import CartView from './CartView';

const CartContainer = () => {
    const {cart} = useContext(CartContext);

  return (
    <div className="flex-grow-1">
    {cart.length === 0 ? <EmptyCart /> : <CartView />}
    </div>
  )
}

export default CartContainer