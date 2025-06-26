import React, { useState } from 'react';
import './../../components/header/navbar.css';
import Logo from '/logo.png';
import { useNavigate } from 'react-router-dom';
import { Table, Button, Form, Modal, Navbar, Container } from 'react-bootstrap';
import initialProducts from '../../data/product.js';

function Admin() {
    const [products, setProducts] = useState(initialProducts);
    const [showModal, setShowModal] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });
    const navigate = useNavigate();


    const handleDelete = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = () => {
        const newId = products.length ? products[products.length - 1].id + 1 : 1;
        setProducts([...products, { id: newId, ...newProduct, price: parseFloat(newProduct.price), stock: parseInt(newProduct.stock) }]);
        setNewProduct({ name: '', price: '', stock: '' });
        setShowModal(false);
    };

    const handleStockChange = (id, newStock) => {
        setProducts(products.map(product =>
            product.id === id ? { ...product, stock: newStock } : product
        ));
    };

    return (
        <div style={{ backgroundColor: '#f9f7f4' }}>
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
            <Container className="py-5">
                <h2 className="mb-4">Admin Dashboard - Products</h2>
                <Button variant="dark" className="mb-3" onClick={() => setShowModal(true)}>
                    Add New Product
                </Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#ID</th>
                            <th>Name</th>
                            <th>Price ($)</th>
                            <th>In Stock</th>
                            <th>Update Stock</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(({ id, name, price, stock }) => (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{price.toFixed(2)}</td>
                                <td>{stock}</td>
                                <td>
                                    <Form.Control
                                        type="number"
                                        min="0"
                                        value={stock}
                                        onChange={(e) => handleStockChange(id, parseInt(e.target.value))}
                                        style={{ width: "80px" }}
                                    />
                                </td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(id)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

                {/* Modal for Adding Product */}
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Product Name</Form.Label>
                                <Form.Control type="text" name="name" value={newProduct.name} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Price</Form.Label>
                                <Form.Control type="number" name="price" value={newProduct.price} onChange={handleInputChange} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control type="number" name="stock" value={newProduct.stock} onChange={handleInputChange} />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
                        <Button variant="dark" onClick={handleAddProduct}>Add Product</Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    );
}

export default Admin;
