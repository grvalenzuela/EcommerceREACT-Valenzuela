import { LinkContainer } from "react-router-bootstrap";
import { traerCategoria, traerCompatible } from "../../helpers/tags";
import "./Item.css";

function Item({ prod }) {
  const categoriaMostrar = traerCategoria(prod.categoria);
  const compatibleMostrar = traerCompatible(prod.compatible);

  return (
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
