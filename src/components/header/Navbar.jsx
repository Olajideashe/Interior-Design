import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '/logo.png';
import cart from '/Cart.png';
import user from '/user.png';
import search from '/search.png';
import './navbar.css';
import { useNavigate } from 'react-router';
function ColorSchemesExample() {
    const navigate = useNavigate()
    return (
        <>
            <Navbar bg="dark justify-content-center" variant="dark" className="py-2">
                <h6 className="text-light" >FREE WORLDWIDE SHIPPING DELIVERY OVER $300</h6>
            </Navbar>
            <div className="bg-light py-3 shadow-sm">
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-4">
                            <a onClick={() => navigate("/about")} className="text-decoration-none text-dark">ABOUT</a>
                            <a href="#" className="text-decoration-none text-dark">LOOKBOOK</a>
                        </div>
                        <div className="position-absolute start-50 translate-middle-x">
                            <Navbar.Brand href="#home"><img onClick={() => navigate("/")} src={Logo} alt="Logo" width="100" /></Navbar.Brand>
                        </div>
                        <div className="d-flex gap-5">
                            <a href="#" className="text-decoration-none text-dark"><img src={search} alt="search button" /></a>
                            <a onClick={() => navigate("/signin")} className="text-decoration-none text-dark"><img src={user} alt="user button" /></a>
                            <a href="#" className="text-decoration-none text-dark"><img src={cart} alt="cart button" /></a>
                        </div>
                    </div>
                </Container>
            </div>
            <Navbar bg="light" expand="lg" >
                <Container className="justify-content-center">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="d-flex gap-4">
                            <Nav.Link onClick={() => navigate("/newin")}>NEW IN</Nav.Link>
                            <Nav.Link onClick={() => navigate("/furnitures")}>FURNITURES</Nav.Link>
                            <Nav.Link onClick={() => navigate("/lights")}>LIGHTS</Nav.Link>
                            <Nav.Link onClick={() => navigate("/rugs")}>RUGS</Nav.Link>
                            <Nav.Link onClick={() => navigate("/decor")}>DECOR</Nav.Link>
                            <Nav.Link onClick={() => navigate("/accessories")}>ACCESSORIES</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;