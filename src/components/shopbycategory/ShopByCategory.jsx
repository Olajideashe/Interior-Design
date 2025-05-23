import React from 'react';
import left from '../../assets/left.png';
import right from '../../assets/right.png';
import './ShopByCategory.css'; // for custom styles

function ShopByCategory() {
    return (
         <section className="py-5 text-center" style={{ backgroundColor: '#f9f7f4' }}>
            <div className="container px-4 px-lg-5">
                <p className="text-uppercase text-muted small mb-4">Shop by category</p>

                <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
                    
                    <div className="mb-4 mb-lg-0 me-lg-5">
                        <img src={left} alt="Living Room" className="img-fluid rounded-top" style={{ maxWidth: '250px' }} />
                    </div>

                    
                    <div className="d-flex flex-column align-items-center px-3 flex-grow-1"style={{ fontFamily: 'Playfair Display, serif' }}>
                        <p className="fs-4 text-muted mb-2">Treandy Sofa Set <sup className="fs-6 text-muted">(85)</sup></p>
                        <h2 className="fw-4 mb-2">Minimal & Modern Chairs <sup className="fs-6 fw-normal">(99)</sup></h2>
                        <p className="fs-4 text-muted mb-2">Accessories For Room <sup className="fs-6 text-muted">(85)</sup></p>
                        <p className="fs-4 text-muted mb-2">Kitchen Items <sup className="fs-6 text-muted">(85)</sup></p>
                        <p className="fs-4 text-muted mb-2">Outdoor Decor <sup className="fs-6 text-muted">(85)</sup></p>
                    </div>
                    <div className="mt-4 mt-lg-0 ms-lg-5">
                        <img src={right} alt="Dining Room" className="img-fluid rounded-top" style={{ maxWidth: '250px' }} />
                    </div>
                </div>

                <div className="mt-5">
                    <a href="#" className="text-decoration-underline text-dark fw-semibold">SEE MORE</a>
                </div>
            </div>
        </section>
    );
}

export default ShopByCategory;
