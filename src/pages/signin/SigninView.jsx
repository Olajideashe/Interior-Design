import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './../../components/header/navbar.css';
import Logo from '/logo.png';
import { useNavigate } from 'react-router-dom';


const SiginView = () => {
  const navigate = useNavigate()

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
      <div className="container mt-5">
        <h1 className="text-center text-3xl text-primary">LOGIN OR SIGNUP TO ACCESS YOUR ACCOUNT</h1>
      </div>
    </div>
  )
}

export default SiginView