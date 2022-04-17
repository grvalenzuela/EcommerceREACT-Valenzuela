import { useCartContext } from "../../context/CartContext";
import { useState } from "react";
import {
  addDoc,
  collection,
  documentId,
  getDocs,
  getFirestore,
  query,
  where,
  writeBatch,
} from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function OrdenCompra({ cartList }) {
  const {
    vaciarCarrito,
    cantidadTotalItem,
    precioTotal,
    cambiarEstadoOrden,
    ordenFinalizada,
    finalizarOrden,
    reiniciarOrden,
  } = useCartContext();

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
      .finally(finalizarOrden);

    batch.commit();
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
    console.log("Cambio en form: " + dataForm.nombre);
  };

  return (
    <div className="row d-flex justify-content-center">
      <div className="col-md-10 border rounded p-3 m-3 bg-white d-flex justify-content-center">
        {ordenFinalizada ? (
          id && (
            <>
              <div className="d-flex flex-column gap-3 justify-content-center">
                <label className={"alert alert-success"}>
                  El id de la compra es: {id}
                </label>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={reiniciarOrden}
                >
                  Regresar
                </Button>
              </div>
            </>
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
              <div className="d-flex gap-3 justify-content-center">
                <Button
                  variant="secondary"
                  type="submit"
                  onClick={cambiarEstadoOrden}
                >
                  Volver
                </Button>
                <Button
                  disabled={cantidadTotalItem() == 0}
                  variant="primary"
                  type="submit"
                  onClick={generarOrden}
                >
                  Terminar Compra
                </Button>
              </div>
            </Form>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrdenCompra;
