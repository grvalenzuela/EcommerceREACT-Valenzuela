import { useCartContext } from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import { MdAdd, MdRemove, MdDelete } from "react-icons/md";
import CartItem from "../CartItem/CartItem";
import { LinkContainer } from "react-router-bootstrap";
import Button from "react-bootstrap/Button";

function Cart() {
  const { cartList, vaciarCarrito } = useCartContext();

  return (
    <div className="container">
      <div className="row  justify-content-center">
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
                // <tr>
                //   <td>{prod.id}</td>
                //   <td>{prod.title}</td>
                //   <td>{prod.price}</td>
                //   <td>
                //     <Button onClick={test(prod)} variant="info" size="sm">
                //       <MdRemove color={"white"} />{" "}
                //     </Button>{" "}
                //     {prod.cantidad}{" "}
                //     <Button onClick={test(prod)} variant="info" size="sm">
                //       <MdAdd color={"white"} />{" "}
                //     </Button>
                //   </td>
                //   <td>
                //     <Button variant="danger" size="sm">
                //       <MdDelete color={"white"} size={18} />{" "}
                //     </Button>
                //   </td>
                // </tr>
                <CartItem key={prod.id} prod={prod} />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <Button onClick={vaciarCarrito} variant="primary">
        Vaciar carrito
      </Button>
    </div>
  );
}

export default Cart;
