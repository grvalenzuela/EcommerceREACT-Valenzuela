import { useCartContext } from "../../context/CartContext";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";

import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

function CartItem({ prod }) {
  const { incrementarCantidad, decrementarCantidad, eliminar } =
    useCartContext();

  const subir = () => {
    incrementarCantidad(prod);
  };

  const bajar = () => {
    decrementarCantidad(prod);
  };

  const borrar = () => {
    eliminar(prod);
  };

  return (
    <tr>
      <td>{prod.id}</td>
      <td>{prod.titulo}</td>
      <td>
        {prod.precio
          ? prod.precio.toLocaleString(navigator.language, {
              minimumFractionDigits: 0,
            })
          : ""}
        $
      </td>
      <td>
        <Button
          disabled={prod.cantidad == 0}
          onClick={bajar}
          variant="info"
          size="sm"
        >
          <MdRemove color={"white"} />{" "}
        </Button>{" "}
        {prod.cantidad}{" "}
        <Button
          disabled={prod.stock <= prod.cantidad}
          onClick={subir}
          variant="info"
          size="sm"
        >
          <MdAdd color={"white"} />{" "}
        </Button>
      </td>
      <td>
        <Button onClick={borrar} variant="danger" size="sm">
          <MdDelete color={"white"} size={18} />{" "}
        </Button>
      </td>
    </tr>
  );
}

export default CartItem;
