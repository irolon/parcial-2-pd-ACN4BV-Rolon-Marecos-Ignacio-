import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CardItem = ({ producto }) => {
    const imgUrl = new URL(`../../assets/img/Img-reloj-${producto.id}.jpg`, import.meta.url).href;

    const { cart, additem } = useContext(CartContext);
    const [purchase, setPurchase] = useState(false);

    const onAdd = (cantidad) => {
        additem(producto, cantidad);
        setPurchase(true);
    };

  return (
    <div className="d-flex flex-column align-items-center mt-5 ">
        <h1 className="mt-5">Detalles del Producto</h1>
    
        <div className="container mt-5 d-flex justify-content-center align-items-center"  >
            <div className="row g-4 align-items-center p-5" style={{ backgroundColor: '#dde1e6ff', borderRadius: '15px' }}>
                <div className="col-12 col-md-auto text-center">
                    <img src={producto.img} alt={producto.modelo} className="img-fluid d-block mx-auto" />
                </div>


                <div className="col-12 col-md-6 ">
                    <h2 className="mb-3">{producto.marca} {producto.modelo}</h2>
                    <p className="mb-2"><strong>Precio:</strong> ${producto.precio}</p>
                    <p className="mb-2"><strong>Descripción:</strong> {producto.descripcion}</p>
                    <p className="mb-2"><strong>Categoría:</strong> {producto.categoria}</p>
                    <p className="mb-3"><strong>Stock disponible:</strong> {producto.stock}</p>
                    {purchase ? (
                        <>  
                            <div className="mt-5">
                                <Link to="/" className="btn btn-outline-dark fw-bold">Continuar comprando</Link>
                                <Link to="/cart" className="btn btn-success  ms-5">Finalizar Compra</Link>
                            </div>


                        </>
                    ) : (
                        <ItemCount stock={producto.stock} onAdd={onAdd} />
                    )}
                </div>
            </div>
        </div>

    </div>


  );
};

export default CardItem;