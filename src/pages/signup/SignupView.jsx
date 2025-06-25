import './../../components/header/navbar.css';
import Logo from '/logo.png';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Navbar, Row, Col } from 'react-bootstrap';
const SignupView = () => {
      const navigate = useNavigate()
    
    return (
        <div>
            <Navbar bg="dark justify-content-center" variant="dark" className="py-2">
                <h6 className="text-light" >FREE WORLDWIDE SHIPPING DELIVERY OVER $300</h6>
            </Navbar>
            <div className="bg-light py-3 shadow-sm">
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="position-absolute start-50 translate-middle-x">
                            <Navbar.Brand href="#home"><img onClick={() => navigate("/")} src={Logo} alt="Logo" width="100" /></Navbar.Brand>
                        </div>
                    </div>
                </Container>
            </div>
             <section
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh', backgroundColor: '#f9f7f4' }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} lg={8}>
                        <div className="p-5 bg-white shadow-sm rounded" style={{ maxWidth: '700px', margin: '0 auto' }}>
                            <h3 className="mb-4 text-center">Create Account</h3>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter first name" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group className="mb-3" controlId="formLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter last name" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Form.Group className="mb-3" controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formConfirmPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" placeholder="Confirm Password" />
                                </Form.Group>

                                <Button variant="dark" type="submit" className="w-100">
                                    Create Account
                                </Button>

                                <p className="mt-3 text-center small">
                                    Already have an account? <a onClick={() => navigate("/signin")} className="text-dark">Sign in</a>
                                </p>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
    )
}

export default SignupView