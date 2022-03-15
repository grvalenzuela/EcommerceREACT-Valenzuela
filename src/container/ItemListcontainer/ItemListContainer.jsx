import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import ItemCount from "../../componentes/ItemCount/ItemCount";
import ItemList from "../../componentes/ItemList/ItemList";
import { getItems } from "../../helpers/getItems";

function ItemListContainer({ saludo }) {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);

  // const { id } = useParams();

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
      .then((resp) => setProds(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const onAdd = (cant) => {
    console.log(cant);
  };

  console.log(prods);
  return (
    <>
      {loading ? (
        <Spinner size={50} animation="border" variant="primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <ItemList prods={prods} />
      )}
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
    </>
  );
}

export default ItemListContainer;
