import { useCartContext } from "../../context/CartContext";
import ItemCount from "../../componentes/ItemCount/ItemCount";
import { traerCategoria, traerCompatible } from "../../helpers/tags";
import "./ItemDetail.css";

function ItemDetail({ prod }) {
  const { addToCart } = useCartContext();

  const categoriaMostrar = traerCategoria(prod.categoria);
  const compatibleMostrar = traerCompatible(prod.compatible);

  const onAdd = (cant) => {
    addToCart({ ...prod, cantidad: cant });
  };

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <div className="col-md-12 bg-white m-3 rounded">
        <div className="row ">
          <div className="col col-md-6 pt-5">
            <img src={prod.img} alt="" className="w-50" />
          </div>
          <div className="col col-md-6  p-3 gap-2 d-flex flex-column align-items-start">
            <h3 className="text-start">{prod.titulo}</h3>
            <h5 className="text-start text-primary">
              <b className="colorGris">Precio: </b>
              {prod.precio
                ? prod.precio.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })
                : ""}
              $
            </h5>
            <h5 className="text-start">
              <b className="colorGris">Categoría: </b>
              {categoriaMostrar}
            </h5>
            <h5 className="text-start">
              <b className="colorGris">Línea: </b>
              {compatibleMostrar}
            </h5>
            <h5 className="text-start">
              <b className="colorGris">Fabricante: </b>
              {prod.marca}
            </h5>
            <div className="row">
              <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
