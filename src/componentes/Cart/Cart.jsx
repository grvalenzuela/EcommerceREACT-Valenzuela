import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import {
  addDoc,
  collection,
  doc,
  documentId,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";

import Table from "react-bootstrap/Table";
import CartItem from "../CartItem/CartItem";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Cart() {
  const { cartList, vaciarCarrito, cantidadTotalItem, precioTotal } =
    useCartContext();
  const [dataForm, setDataForm] = useState({
    email: "",
    nombre: "",
    telefono: "",
  });
  const [id, setId] = useState(null);

  // Generar ORDEN
  const generarOrden = async (e) => {
    e.preventDefault();

    // Nuevo objeto de ordenes
    let orden = {};

    orden.comprador = dataForm;
    orden.total = precioTotal();

    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const titulo = cartItem.titulo;
      const precio = cartItem.precio * cartItem.cantidad;

      return { id, titulo, precio };
    });

    const db = getFirestore();
    const queryCollectionItems = collection(db, "ordenes");
    await addDoc(queryCollectionItems, orden)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err))
      .finally(() => vaciarCarrito());

    // Actualiza Stock

    const queryCollection = collection(db, "productos");

    const queryActulizarStock = await query(
      queryCollection,
      where(
        documentId(),
        "in",
        cartList.map((it) => it.id)
      )
    );

    const batch = writeBatch(db);

    await getDocs(queryActulizarStock)
      .then((resp) =>
        resp.docs.forEach((res) =>
          batch.update(res.ref, {
            stock:
              res.data().stock -
              cartList.find((item) => item.id === res.id).cantidad,
          })
        )
      )
      .finally(() => console.log("actulalizado"));

    batch.commit();
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
    console.log("Cambio en form: " + dataForm.nombre);
  };

  console.log("Precio Total: " + precioTotal());

  return (
    <div className="container">
      <div className="row  justify-content-center">
        {cantidadTotalItem() != 0 ? (
          <div
            className="col-md-10 border rounded"
            style={{ backgroundColor: "white" }}
          >
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
            <Button onClick={vaciarCarrito} variant="primary">
              Vaciar carrito
            </Button>
          </div>
        ) : (
          <h3>No hay productos en el carrito</h3>
        )}
      </div>
      <div
        className="row justify-content-center border rounded"
        style={{ backgroundColor: "white" }}
      >
        {id != null ? (
          id && (
            <label className={"alert alert-success"}>
              El id de la compra es: {id}
            </label>
          )
        ) : (
          <div className="col-md-6">
            <Form onSubmit={generarOrden}>
              {" "}
              <Form.Group className="mb-3" controlId="dataForm.nombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  value={dataForm.nombre}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="dataForm.telefono">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Teléfono"
                  name="telefono"
                  value={dataForm.telefono}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="dataForm.email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={dataForm.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="dataForm.email">
                <Form.Label>Repita Email</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={dataForm.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button
                disabled={cantidadTotalItem() == 0}
                variant="primary"
                type="submit"
                onClick={generarOrden}
              >
                Terminar Compra
              </Button>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
