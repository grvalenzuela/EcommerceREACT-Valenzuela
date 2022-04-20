import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [ordenGenerada, setOrdenGenerada] = useState(false);
  const [ordenFinalizada, setOrdenFinalizada] = useState(false);
  const cantidadProductos = cartList.length;

  // Agrega al carrito
  const agregarACarrito = (item) => {
    let itemEnCart = cartList.find((prod) => prod.id === item.id);
    console.log(itemEnCart);
    itemEnCart
      ? (itemEnCart.cantidad += item.cantidad)
      : setCartList([...cartList, item]);
  };

  // Incrementar cantidad
  const incrementarCantidad = (item) => {
    const cartCopy = cartList.map((prod) => {
      if (prod.id === item.id) {
        prod.cantidad++;
      }
      return prod;
    });

    setCartList(cartCopy);
  };

  // Reducir cantidad
  const decrementarCantidad = (item) => {
    const cartCopy = cartList.map((prod) => {
      if (prod.id === item.id) {
        prod.cantidad--;
      }
      return prod;
    });

    setCartList(cartCopy);
  };

  // Eliminar del carrito
  const eliminar = (item) => {
    setCartList(cartList.filter((prod) => prod.id != item.id));
  };

  // varicar carrito
  const vaciarCarrito = () => {
    setCartList([]);
  };

  // Cambiar estado de la orden
  const cambiarEstadoOrden = () => {
    ordenGenerada ? setOrdenGenerada(false) : setOrdenGenerada(true);
  };

  // Finalizar orden
  const finalizarOrden = () => {
    setOrdenFinalizada(true);
  };

  // Reiniciar orden
  const reiniciarOrden = () => {
    setOrdenGenerada(false);
    setOrdenFinalizada(false);
  };

  // Obtener precio total
  const precioTotal = () => {
    return cartList.reduce(
      (acum, prod) => acum + prod.cantidad * prod.precio,
      0
    );
  };

  // Obtener cantidad de items en carrito
  const cantidadTotalItem = () => {
    return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        agregarACarrito,
        incrementarCantidad,
        decrementarCantidad,
        eliminar,
        vaciarCarrito,
        precioTotal,
        cantidadTotalItem,
        cantidadProductos,
        ordenGenerada,
        cambiarEstadoOrden,
        ordenFinalizada,
        finalizarOrden,
        reiniciarOrden,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
