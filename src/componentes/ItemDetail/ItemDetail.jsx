import "./ItemDetail.css";
import ItemCount from "../../componentes/ItemCount/ItemCount";

function ItemDetail({ prod }) {
  console.log(prod);

  const onAdd = (cant) => {
    console.log(`${cant} Agregados al carrito`);
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col col-6 pt-5">
          <img src={prod.img} alt="" className="w-50" />
        </div>
        <div className="col col-5 ms-2 mt-5 p-3 gap-3 divProducto divCompra d-flex flex-column align-items-end">
          <h3 className="text-end">{prod.title}</h3>
          <h4 className="text-success">
            {prod.price
              ? prod.price.toLocaleString(navigator.language, {
                  minimumFractionDigits: 0,
                })
              : ""}
            $
          </h4>
          <ItemCount initial={1} stock={prod.stock} onAdd={onAdd} />
          {/* <button className="btn btn-success btn-block">Comprar</button> */}
        </div>
      </div>
    </div>
  );
}
export default ItemDetail;
