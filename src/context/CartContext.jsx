import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);
  const cantidadProductos = cartList.length;

  const addToCart = (item) => {
    /// repita duplicado
    let itemEnCart = cartList.find((prod) => prod.id === item.id);
    console.log(itemEnCart);
    itemEnCart
      ? (itemEnCart.cantidad += item.cantidad)
      : setCartList([...cartList, item]);
  };

  const vaciarCarrito = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        vaciarCarrito,
        cantidadProductos,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
