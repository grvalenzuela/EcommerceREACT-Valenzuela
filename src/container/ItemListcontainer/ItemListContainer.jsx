import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "../../helpers/getItems";
import Spinner from "react-bootstrap/Spinner";
import ItemList from "../../componentes/ItemList/ItemList";

function ItemListContainer({ saludo }) {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);

  const { id } = useParams();

  // return (
  //   <>
  //     <div>{saludo}</div>

  //     <>
  //       <Button onClick={restarCount} variant="outline-primary">
  //         <MdRemove size={20} />
  //       </Button>{" "}
  //       <label>{count}</label>{" "}
  //       <Button onClick={sumarCount} variant="outline-primary">
  //         <MdAdd size={20} />
  //       </Button>
  //     </>

  //     {/* <button onClick={handleBool}>Buleano</button> */}
  //   </>
  // );

  useEffect(() => {
    getItems // simula llamado API
      .then((resp) =>
        setProds(resp.filter((prod) => (id ? prod.category === id : prod)))
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

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
