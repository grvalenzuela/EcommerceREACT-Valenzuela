import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../helpers/getItems";
import Spinner from "react-bootstrap/Spinner";
import ItemDetail from "../../componentes/ItemDetail/ItemDetail";
import {
  collection,
  getDocs,
  getFirestore,
  doc,
  getDoc,
  orderBy,
  query,
  where,
} from "firebase/firestore";

function ItemDetailContianer() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { detalleId } = useParams();
  console.log(detalleId);

  // useEffect(() => {
  //   getItems // simula llamado API
  //     .then((resp) => setProducto(resp.find((prod) => prod.id === detalleId)))
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  useEffect(() => {
    console.log(detalleId);
    const db = getFirestore();

    const docRef = doc(db, "productos", detalleId);
    const docSnap = getDoc(docRef)
      .then((resp) => setProducto({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detalleId]);

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
