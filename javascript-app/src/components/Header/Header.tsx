import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/img/Icon (1).png"

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <div>  shapely</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"> <div>HOME</div></Nav.Link>
            <Nav.Link href="#link"><div>BLUG</div></Nav.Link>
            <Nav.Link href="#link"><div>PORTFOLIO</div></Nav.Link>
            <Nav.Link href="#link"><div>ABOUT THE TEST</div></Nav.Link>
            <Nav.Link href="#link"><div>LEVEL 1</div></Nav.Link>
            <Nav.Link href="#link"><div>SHOP</div></Nav.Link>
            <Nav.Link href="#link"><div>BUY NOW</div></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
