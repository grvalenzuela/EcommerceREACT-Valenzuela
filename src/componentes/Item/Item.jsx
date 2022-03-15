import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Item({ prod }) {
  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div key={prod.id} className="col-md-6">
          <div className="card w-100 mt-5 justify-content-center">
            <div className="card-header">{`${prod.title} - ${prod.category}`}</div>
            <div className="card-body">
              <div className="row justify-content-center">
                <img src={prod.img} alt="" className="w-50" />
              </div>
              <div className="row justify-content-center">
                <h5>
                  {prod.price.toLocaleString(navigator.language, {
                    minimumFractionDigits: 0,
                  })}
                  $
                </h5>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-primary btn-block">
                detalle del producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
