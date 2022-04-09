import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

const ItemContador = ({ count, sumarCount, restarCount, agregar }) => {
  return (
    <>
      {" "}
      <div>
        <Button onClick={restarCount} variant="success">
          <MdRemove size={20} />{" "}
        </Button>{" "}
        <label>{count}</label>{" "}
        <Button onClick={sumarCount} variant="success">
          <MdAdd size={20} />{" "}
        </Button>
      </div>
      <button
        disabled={count <= 0}
        onClick={agregar}
        className="btn btn-success btn-block"
      >
        Agregar al carrito
      </button>
    </>
  );
};

const IrCarrito = () => {
  return (
    <div>
      <LinkContainer to="/carrito">
        <button className="btn btn-primary btn-block">Terminar compra</button>
      </LinkContainer>{" "}
      <LinkContainer to="/">
        <button className="btn btn-secondary btn-block">Volver a Inicio</button>
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
    <div className="p-3 gap-3 d-flex flex-column">
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
