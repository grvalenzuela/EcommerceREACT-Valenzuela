import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Item({ prod }) {
  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div key={prod.id} className="col-md-6">
          <div className="card mt-3 justify-content-center">
            <div className="card-header">{`${prod.titulo} - ${prod.categoria}`}</div>
            <div className="card-body">
              <div className="row justify-content-center">
                <img src={prod.img} alt="" className="w-50" />
              </div>
              <div className="row justify-content-center">
                <h5>
                  {prod.precio.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })}
                  $
                </h5>
              </div>
            </div>
            <div className="card-footer">
              <LinkContainer to={`/detalle/${prod.id}`}>
                <button className="btn btn-primary btn-block">
                  detalle del producto
                </button>
              </LinkContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
