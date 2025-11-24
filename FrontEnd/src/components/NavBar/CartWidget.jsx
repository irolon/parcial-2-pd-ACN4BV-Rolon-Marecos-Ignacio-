import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import CardNavView from "./CardNavView";


const CartWidget = ({ onClick, isOpen, onCloseCart }) => {
    const { cart, removeItem,total , cartQty, clearCart } = useContext(CartContext);
    
    const totalItems = cartQty();
    const totalPrice = total();
    
    return (
        <div>
            <button className="btn position-relative p-0 btn-carrito" type="button" aria-label="Carrito" onClick={onClick}>
                <i className="bi bi-cart3 fs-3 color-nav"></i>
                {totalItems > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {totalItems}
                    </span>
                )}
            </button>
            <CardNavView cart={cart} removeItem={removeItem} isOpen={isOpen} totalPrice={totalPrice} clearCart={clearCart} onCloseCart={onCloseCart} />
        </div>
        
        
        
    );
}

export default CartWidget;