import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../helpers/getItems";
import Spinner from "react-bootstrap/Spinner";
import ItemList from "../../componentes/ItemList/ItemList";
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ saludo }) {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);

  const { id } = useParams();

  // useEffect(() => {
  //   getItems // simula llamado API
  //     .then((resp) =>
  //       setProds(resp.filter((prod) => (id ? prod.categoria === id : prod)))
  //     )
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, []);

  // traer productos filtrados por categorías
  useEffect(() => {
    console.log(id);
    const db = getFirestore();

    const queryCollectionFinal = !id
      ? collection(db, "productos")
      : query(
          collection(db, "productos"),
          where("categoria", "==", id)
          //orderBy("titulo", "desc")
        );

    getDocs(queryCollectionFinal)
      .then(setLoading(true))
      .then((resp) =>
        setProds(
          resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);

  console.log(prods);
  return (
    <>
      {loading ? (
        <div className="p-3">
          <Spinner size={50} animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <div className="p-3">
          <ItemList prods={prods} />
        </div>
      )}
    </>
  );
}

export default ItemListContainer;
