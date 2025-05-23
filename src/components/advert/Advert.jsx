import React from 'react';
import './advert.css';

function Advert() {
    return (
        <section className="advert-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-4 mb-4">
                        <p className="fw-bold">FIND</p>
                        <h2 className="mb-3 " style={{ fontFamily: 'Playfair Display, serif' }}>Unique & Modern Products</h2>
                        <p>A considered line of versatile products designed to work in every room</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <p className="fw-bold">BUY</p>
                        <h2 className="mb-3 " style={{ fontFamily: 'Playfair Display, serif' }}>Expertly Vetted Quality</h2>
                        <p>Beautiful, durable materials selected for a lower impact and longer lifespan</p>
                    </div>
                    <div className="col-md-4 mb-4">
                        <p className="fw-bold">COLLECT</p>
                        <h2 className="mb-3 " style={{ fontFamily: 'Playfair Display, serif' }}>Delivery At Your Door</h2>
                        <p>Support, guidance, and original content to help you organize with intention</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Advert;
