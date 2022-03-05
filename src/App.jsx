import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import logo from "./logo.svg";
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
