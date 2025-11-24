import { useState, useEffectEvent } from "react";

export const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);
    const [compra, setCompra] = useState(false);

    const sumar =() => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const restar = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
 
    const ejecutarCompra = () => {
        onAdd(count);
    };

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center align-items-center mb-3">
                <button className="btn btn-outline-primary me-3" onClick={restar}>-</button>
                <span>{count}</span>
                <button className="btn btn-outline-primary ms-3" onClick={sumar}>+</button>
            </div>
            <button className="btn btn-primary" onClick={ejecutarCompra}>
                Agregar al carrito
            </button>
        </div>
    );
};
export default ItemCount;