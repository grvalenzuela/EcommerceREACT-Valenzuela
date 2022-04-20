import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import logo from "./logo.svg";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./componentes/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const ItemListContainer = lazy(() =>
    import("./container/ItemListcontainer/ItemListContainer")
  );

  return (
    <Suspense
      fallback={
        <div className="p-3">
          <Spinner size={50} animation="border" variant="primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
    >
      <BrowserRouter>
        <CartContextProvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer></ItemListContainer>}
              />
              <Route path="/categoria/:id" element={<ItemListContainer />} />
              <Route
                path="/detalle/:detalleId"
                element={<ItemDetailContainer />}
              />
              <Route path="/carrito" element={<Cart />} />
              {/* <Route path='/notFound' element={<Componente404 />}/> */}

              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </CartContextProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
