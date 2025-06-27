import { useState } from 'react'
import './../../components/header/navbar.css';
import Logo from '/logo.png';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Navbar, Row, Col } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';



const SiginView = () => {
  const navigate = useNavigate()

  //component state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setProcessing(true);
      const url = "https://interior-design-backend-1kjs.onrender.com/api/auth/login";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),

      });

      const data = await response.json();
      if (response.ok) {
        if (data.user.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/"); // or to user dashboard
        }
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
    } finally {
      setProcessing(false);
    }

  };


  return (
    <div >
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
            <Col md={10} lg={8}> {/* Wider column */}
              <div
                className="p-5 bg-white shadow-sm rounded"
                style={{ maxWidth: '700px', margin: '0 auto' }} // Centered + max width
              >
                <h3 className="mb-4 text-center">Sign In To Access Your Account</h3>
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"
                      value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"
                      value={password} onChange={(e) => setPassword(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3 d-flex justify-content-between align-items-center">
                    <Form.Check type="checkbox" label="Remember me" />
                    <a href="#" className="text-decoration-none small">Forgot password?</a>
                  </Form.Group>
                  <div>
                    {processing ? (<Spinner animation="border" variant="primary" />) : (<Button variant="dark" type="submit" className="w-100">
                      Sign In
                    </Button>)}
                  </div>


                  <p className="mt-3 text-center small">
                    Don’t have an account? <a onClick={() => navigate("/signup")} className="text-dark">Sign Up</a>
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

export default SiginView