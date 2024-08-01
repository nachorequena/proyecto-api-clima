import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand href="#" className="text-light">
          Encuentra el clima de tu ciudad
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
