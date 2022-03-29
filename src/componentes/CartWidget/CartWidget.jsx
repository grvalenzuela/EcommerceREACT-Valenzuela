import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useCartContext } from "../../context/CartContext";
import Badge from "react-bootstrap/Badge";

function CartWidget() {
  const { cantidadProductos } = useCartContext();

  console.log(cantidadProductos);
  return (
    <div>
      <MdShoppingCart size={30} />
      {cantidadProductos != 0 ? (
        <Badge bg="warning" text="dark">
          {cantidadProductos}
        </Badge>
      ) : (
        ""
      )}
    </div>
  );
}

export default CartWidget;
