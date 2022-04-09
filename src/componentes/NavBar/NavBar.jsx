import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import React from "react";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  //console.log(props)
  const categorias = [
    { id: "procesador", nombre: "Procesadores" },
    { id: "mother", nombre: "MotherBoards" },
    { id: "video", nombre: "Placas de Video" },
  ];
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PC-Commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/carrito">
                <Nav.Link>Carrito</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Categoria" id="basic-nav-dropdown">
                {categorias.map((categoria) => (
                  <LinkContainer
                    key={categoria.id}
                    to={`categoria/${categoria.id}`}
                  >
                    <NavDropdown.Item href="#action/3.1">
                      {categoria.nombre}
                    </NavDropdown.Item>
                  </LinkContainer>
                ))}
                {/* <LinkContainer to={`categoria/${"mother"}`}>
                  <NavDropdown.Item href="#action/3.2">
                    Motherboards
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={`categoria/${"video"}`}>
                  <NavDropdown.Item href="#action/3.2">
                    Placas de video
                  </NavDropdown.Item>
                </LinkContainer> */}
              </NavDropdown>
            </Nav>
            <Nav>
              <LinkContainer to="/carrito">
                <Nav.Link eventKey={2} href="#memes">
                  <CartWidget />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
