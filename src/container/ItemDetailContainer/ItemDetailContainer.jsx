import { useState } from "react";
import { useParams } from "react-router-dom";
//import ItemDetail from "../../componentes/ItemDetail/ItemDetail";

function ItemDetailContianer() {
  const [producto, setProducto] = useState({});

  const { detalleId } = useParams();
  console.log(detalleId);

  return <div>'ItemDetailContainer'</div>;
}

export default ItemDetailContianer;
