import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import ItemDetail from "../../componentes/ItemDetail/ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

function ItemDetailContianer() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);
  const { detalleId } = useParams();

  useEffect(() => {
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
        <div className="">
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
