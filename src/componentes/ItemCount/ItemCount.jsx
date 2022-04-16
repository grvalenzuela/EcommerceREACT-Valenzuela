import { useState } from "react";
import { MdAdd, MdRemove, MdAddShoppingCart } from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

const ItemContador = ({ count, sumarCount, restarCount, agregar }) => {
  return (
    <>
      {" "}
      <div className="d-flex gap-1 justify-content-start">
        <Button onClick={restarCount} variant="dark" size="sm">
          <MdRemove size={15} />{" "}
        </Button>{" "}
        <label>{count}</label>{" "}
        <Button onClick={sumarCount} variant="dark" size="sm">
          <MdAdd size={15} />{" "}
        </Button>
      </div>
      <button
        disabled={count <= 0}
        onClick={agregar}
        className="btn btn-warning  text-white btn-block btn-sm"
      >
        <MdAddShoppingCart size={18} /> Agregar al carrito
      </button>
    </>
  );
};

const IrCarrito = () => {
  return (
    <div>
      <LinkContainer to="/carrito">
        <button className="btn btn-primary btn-block btn-sm">
          Terminar compra
        </button>
      </LinkContainer>{" "}
      <LinkContainer to="/">
        <button className="btn btn-secondary btn-block btn-sm">
          Volver a Inicio
        </button>
      </LinkContainer>
    </div>
  );
};

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [estadoBoton, setEstadoBoton] = useState("contador");

  const sumarCount = () => {
    setCount(count < stock ? count + 1 : stock);
    console.log(count);
  };

  const restarCount = () => {
    setCount(count > 0 ? count - 1 : 0);
    console.log(count);
  };

  const agregar = () => {
    onAdd(count);
    setEstadoBoton("terminar");
  };

  return (
    <div className="p-1 gap-2 d-flex flex-column justify-content-start">
      {estadoBoton === "contador" ? (
        <ItemContador
          count={count}
          sumarCount={sumarCount}
          restarCount={restarCount}
          agregar={agregar}
        />
      ) : (
        <IrCarrito />
      )}
    </div>
  );
};

export default ItemCount;
