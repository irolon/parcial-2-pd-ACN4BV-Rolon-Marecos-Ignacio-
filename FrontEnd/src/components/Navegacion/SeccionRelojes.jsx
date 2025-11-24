import '../../css/Seccion-2.css';
import ItemList from '../Cards/ItemList';
import { useEffect, useState } from 'react';
import LoaderComponent from '../Cards/LoaderComponent';
import { useParams } from 'react-router-dom';
import { getProductosFromBackend } from "../../service/api";
import CardSeccionRelojes from '../Cards/CardSeccionRelojes';


const SeccionRelojes = () => {
    const [prod, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {type} = useParams();
 
    useEffect(() => {
        setLoading(true);

        getProductosFromBackend()
        .then((productos) => {            
            setProductos(productos);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);

    let productosFiltrados = [];
    let backgroundImage = '';
    
    if (type === 'clasicos') {
        productosFiltrados = prod.filter(producto => producto.categoria === "Relojes Clasicos");
        backgroundImage = 'https://i.ibb.co/sds3s9Lr/Img-reloj-clasico.jpg';
    } else if (type === 'deportivos') {
        productosFiltrados = prod.filter(producto => producto.categoria === "Relojes Deportivos");
        backgroundImage = 'https://i.ibb.co/GLYLDT2/Img-reloj-deportivo.jpg';
    } else if (type === 'inteligentes') {
        productosFiltrados = prod.filter(producto => producto.categoria === "Relojes Inteligentes");
        backgroundImage = 'https://i.ibb.co/GvP3VmRK/Img-div-centro.jpg';
    }    
    else {
        productosFiltrados = prod;
    }

    return (
        <>
           <CardSeccionRelojes backgroundImage={backgroundImage} type={type} productosFiltrados={productosFiltrados} loading={loading} LoaderComponent={LoaderComponent} ItemList={ItemList}/>
        </>
    )
}

export default SeccionRelojes;