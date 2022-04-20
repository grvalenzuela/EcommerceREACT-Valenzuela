import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { useCartContext } from "../../context/CartContext";
import Badge from "react-bootstrap/Badge";

function CartWidget() {
  const { cantidadTotalItem } = useCartContext();

  return (
    <div>
      <MdShoppingCart size={30} />
      {cantidadTotalItem() != 0 ? (
        <Badge bg="warning" text="dark">
          {cantidadTotalItem()}
        </Badge>
      ) : (
        ""
      )}
    </div>
  );
}

export default CartWidget;
