import { useCartContext } from "../../context/CartContext";
import Table from "react-bootstrap/Table";
import CartItem from "../CartItem/CartItem";
import OrdenCompra from "../OrdenCompra/Ordencompra";
import Button from "react-bootstrap/Button";

function Cart() {
  const {
    cartList,
    vaciarCarrito,
    cantidadTotalItem,
    precioTotal,
    ordenGenerada,
    cambiarEstadoOrden,
  } = useCartContext();

  return (
    <div className="container">
      {ordenGenerada ? (
        <OrdenCompra cartList={cartList} />
      ) : (
        <div className="row  justify-content-center">
          {cantidadTotalItem() != 0 ? (
            <div className="col-md-10 m-3 border rounded p-3 bg-white">
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
              <div className="p-3">
                <div>
                  <h3>
                    Total:{" "}
                    {precioTotal()
                      ? precioTotal().toLocaleString(navigator.language, {
                          minimumFractionDigits: 0,
                        })
                      : ""}
                    $
                  </h3>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center">
                <Button onClick={vaciarCarrito} variant="dark" size="sm">
                  Vaciar carrito
                </Button>{" "}
                <Button
                  onClick={cambiarEstadoOrden}
                  variant="primary"
                  size="sm"
                >
                  Generar Orden
                </Button>
              </div>
            </div>
          ) : (
            <h3>No hay productos en el carrito</h3>
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;
