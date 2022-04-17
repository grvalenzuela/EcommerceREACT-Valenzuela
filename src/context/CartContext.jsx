import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const [ordenGenerada, setOrdenGenerada] = useState(false);
  const [ordenFinalizada, setOrdenFinalizada] = useState(false);
  const cantidadProductos = cartList.length;

  const addToCart = (item) => {
    let itemEnCart = cartList.find((prod) => prod.id === item.id);
    console.log(itemEnCart);
    itemEnCart
      ? (itemEnCart.cantidad += item.cantidad)
      : setCartList([...cartList, item]);
  };

  const incrementarCantidad = (item) => {
    const cartCopy = cartList.map((prod) => {
      if (prod.id === item.id) {
        prod.cantidad++;
      }
      return prod;
    });

    setCartList(cartCopy);
  };

  const decrementarCantidad = (item) => {
    const cartCopy = cartList.map((prod) => {
      if (prod.id === item.id) {
        prod.cantidad--;
      }
      return prod;
    });

    setCartList(cartCopy);
  };

  const eliminar = (item) => {
    setCartList(cartList.filter((prod) => prod.id != item.id));
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  const cambiarEstadoOrden = () => {
    ordenGenerada ? setOrdenGenerada(false) : setOrdenGenerada(true);
  };

  const finalizarOrden = () => {
    setOrdenFinalizada(true);
  };

  const reiniciarOrden = () => {
    setOrdenGenerada(false);
    setOrdenFinalizada(false);
  };
  //
  const precioTotal = () => {
    return cartList.reduce(
      (acum, prod) => acum + prod.cantidad * prod.precio,
      0
    );
  };

  //
  const cantidadTotalItem = () => {
    return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
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
