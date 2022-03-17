import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../helpers/getItems";
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
    <div>
      <ItemDetail prod={producto} />
    </div>
  );
}

export default ItemDetailContianer;
