import { useCartContext } from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";
import CartItem from "../CartItem/CartItem";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

function Cart() {
  const { cartList, vaciarCarrito, cantidadProductos } = useCartContext();

  return (
    <div className="container">
      <div className="row  justify-content-center">
        {cantidadProductos != 0 ? (
          <div className="col-md-10">
            <Table responsive>
              <thead>
                <tr>
                  <th>Código</th>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartList.map((prod) => (
                  <CartItem key={prod.id} prod={prod} />
                ))}
              </tbody>
            </Table>
            <Button onClick={vaciarCarrito} variant="primary">
              Vaciar carrito
            </Button>
          </div>
        ) : (
          <h3>No hay productos en el carrito</h3>
        )}
      </div>
    </div>
  );
}

export default Cart;
