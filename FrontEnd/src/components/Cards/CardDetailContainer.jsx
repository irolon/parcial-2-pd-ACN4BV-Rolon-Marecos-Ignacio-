import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import CardItem from "./CardItem";
import LoaderComponent from "./LoaderComponent";
import { getProductoById } from "../../service/api";


const CardDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    setLoading(true);
    getProductoById(id)
    .then((producto) => {
      if(producto){
        setProducto(producto);
      }else{
        console.log("No se encontró el producto con ID:", id);
      }
    })
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="container my-5">
      {producto ? (
        <div className="row justify-content-center">
          <CardItem producto={producto} />
        </div>
      ) : (
        <LoaderComponent />
      )}
    </div>
  );
};

export default CardDetailContainer;