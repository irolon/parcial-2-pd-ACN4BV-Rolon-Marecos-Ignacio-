import { useEffect, useState } from "react";
import ItemList from "../Cards/ItemList";
import CardImgCenter from "../Inicio/CardImgCenter";
import BtnVerMas from "../Btn/BtnVerMas";
import LoaderComponent from "../Cards/LoaderComponent";
import { getProductosFromBackend } from "../../service/api";

const HomeListContainer = () => {
    const [prod, setProductos] = useState([]);
    const [mostrarMasPrimera, setMostrarMasPrimera] = useState(false);
    const [mostrarMasSegunda, setMostrarMasSegunda] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        getProductosFromBackend()
        .then((productos) => {
            setProductos(productos);
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, []);


    const productosClasicos = prod.filter(producto => producto.categoria === "Relojes Clasicos");
    const productosDeportivos = prod.filter(producto => producto.categoria === "Relojes Deportivos");
    const productosInteligentes = prod.filter(producto => producto.categoria === "Relojes Inteligentes");

    const primerosCuatro = productosClasicos.slice(0, 4);
    const segundosCuatro = productosDeportivos.slice(0, 4);
    
    const primerosCuatroSmart = productosInteligentes.slice(0, 4);
    const segundosCuatroSmart = productosInteligentes.slice(4, 8);



    return (
    <div>
        <div className="container my-5">
            <div className="row">
                <div className="col">
                <h2 className="text-center mb-5">Encontrá tu próximo reloj</h2>
                </div>
            </div>
            {loading ? <LoaderComponent /> : (
                <>
                    <ItemList productos={primerosCuatro}  />
                    <BtnVerMas   visible={!mostrarMasPrimera && prod.length > 4}
                                onClick={() => setMostrarMasPrimera(true)} />
                    {mostrarMasPrimera && (<ItemList productos={segundosCuatro}  />)}
                </>
            )}
        </div>

        <CardImgCenter />
        <div className="container my-5">

            <div className="row">
                <div className="col">
                    <h2 className="text-center mb-5">Encontra tu proximo reloj</h2>
                </div>
            </div>
            {loading ? <LoaderComponent /> : (
                <>
                    <ItemList productos={primerosCuatroSmart} />
                    <BtnVerMas   visible={!mostrarMasSegunda && prod.length > 4}
                                onClick={() => setMostrarMasSegunda(true)} />
                    { mostrarMasSegunda && (<ItemList productos={segundosCuatroSmart}  />)}
                </>
            )}
        </div>
    </div>
    )
}



export default HomeListContainer;
