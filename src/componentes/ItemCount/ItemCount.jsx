import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import Button from "react-bootstrap/Button";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const sumarCount = () => {
    setCount(count < stock ? count + 1 : stock);
    console.log(count);
  };

  const restarCount = () => {
    setCount(count > 0 ? count - 1 : 0);
    console.log(count);
  };

  const agregar = () => {
    onAdd(count);
  };

  return (
    <div className="p-3">
      {" "}
      <Button onClick={restarCount} variant="outline-primary">
        <MdRemove size={20} />{" "}
      </Button>{" "}
      <label>{count}</label>{" "}
      <Button onClick={sumarCount} variant="outline-primary">
        <MdAdd size={20} />{" "}
      </Button>
      <button onClick={agregar}>Add to Cart</button>
    </div>
  );
};

export default ItemCount;
