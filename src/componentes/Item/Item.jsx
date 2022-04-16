import { LinkContainer } from "react-router-bootstrap";
import { traerCategoria, traerCompatible } from "../../helpers/tags";
import "./Item.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Item({ prod }) {
  const categoriaMostrar = traerCategoria(prod.categoria);
  const compatibleMostrar = traerCompatible(prod.compatible);

  return (
    // <div className="container">
    //   <div className="row  justify-content-center">
    //     <div key={prod.id} className="col-md-6">
    //       <div className="card mt-3 justify-content-center">
    //         <div className="card-header">{`${prod.titulo} - ${prod.categoria}`}</div>
    //         <div className="card-body">
    //           <div className="row justify-content-center">
    //             <img src={prod.img} alt="" className="w-50" />
    //           </div>
    //           <div className="row justify-content-center">
    //             <h5>
    //               {prod.precio.toLocaleString(navigator.language, {
    //                 minimumFractionDigits: 0,
    //               })}
    //               $
    //             </h5>
    //           </div>
    //         </div>
    //         <div className="card-footer">
    //           <LinkContainer to={`/detalle/${prod.id}`}>
    //             <button className="btn btn-primary btn-block">
    //               detalle del producto
    //             </button>
    //           </LinkContainer>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container mt-5 mb-5">
      <div className="d-flex justify-content-center row">
        <div className="col-md-8">
          <div className="row p-2 bg-white border rounded">
            <div className="col-md-3 mt-1">
              <img
                className="img-fluid img-responsive rounded product-image"
                src={prod.img}
              />
            </div>
            <div className="col-md-6 mt-1">
              <h5>{prod.titulo}</h5>
              <div className="mt-1 mb-1 spec-1">
                <span className="dot"></span>
                <span>{categoriaMostrar}</span>
                <span className="dot"></span>
                <span>Línea {compatibleMostrar}</span>
              </div>
              <p className="text-justify text-truncate para mb-0">
                <br />
                <br />
              </p>
            </div>
            <div className="col-md-3 borde-izq mt-1 pl-1">
              <div className="d-flex flex-row ">
                <h4 className="mr-1">
                  {prod.precio.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })}
                  $
                </h4>
              </div>
              <div className="d-flex flex-row">
                <h6 className="text-success">Envio Gratis</h6>
              </div>

              <div className="d-flex flex-column mt-4">
                <LinkContainer to={`/detalle/${prod.id}`}>
                  <button className="btn btn-warning btn-sm text-white">
                    Detalle
                  </button>
                </LinkContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
