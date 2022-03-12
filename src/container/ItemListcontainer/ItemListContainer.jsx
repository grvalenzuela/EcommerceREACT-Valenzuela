import { useState, useEffect } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import Button from "react-bootstrap/Button";

function ItemListContainer({ saludo }) {
  const [count, setCount] = useState(0); // return [0,1]
  const [bool, setBool] = useState(true); // return [0,1]

  const stock = 10;
  // useEffect(() => {
  //   console.log("use Effect cada vez que se renderize el componente");
  //   // add event listener
  //   return () => {
  //     console.log("efecto de limpieza");
  //   };
  // });

  // useEffect(() => {
  //   console.log(
  //     "llamada a api, o tarea sincrónica pesada - 2 - Una sola vez después del primer montado "
  //   );
  // }, []);

  // useEffect(() => {
  //   console.log("Solo se dispara si cambia bool");
  // }, [bool, saludo]);

  //let count = 0

  const sumarCount = () => {
    // count = count +1, count += 1, count ++
    setCount(count < stock ? count + 1 : stock);
    console.log(count);
  };

  const restarCount = () => {
    // count = count +1, count += 1, count ++
    setCount(count > 0 ? count - 1 : 0);
    console.log(count);
  };

  // const handleBool = () => {
  //   setBool(!bool);
  //   //console.log(count)
  // };

  return (
    <>
      <div>{saludo}</div>

      <>
        <Button onClick={restarCount} variant="outline-primary">
          <MdRemove size={20} />
        </Button>{" "}
        <label>{count}</label>{" "}
        <Button onClick={sumarCount} variant="outline-primary">
          <MdAdd size={20} />
        </Button>
      </>

      {/* <button onClick={handleBool}>Buleano</button> */}
    </>
  );
}

export default ItemListContainer;
