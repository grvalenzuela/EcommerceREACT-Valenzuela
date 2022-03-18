import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../helpers/getItems";
import Spinner from "react-bootstrap/Spinner";
import ItemDetail from "../../componentes/ItemDetail/ItemDetail";

function ItemDetailContianer() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { detalleId } = useParams();
  console.log(detalleId);

  useEffect(() => {
    getItems // simula llamado API
      .then((resp) => setProducto(resp.find((prod) => prod.id === detalleId)))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <div className="p-3">
          <Spinner size={50} animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <ItemDetail prod={producto} />
      )}
    </>
  );
}

export default ItemDetailContianer;
