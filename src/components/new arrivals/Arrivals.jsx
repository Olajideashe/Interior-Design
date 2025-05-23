import React from 'react'
import sofa1 from '/sofa1.png'
import sofa2 from '/sofa2.png'
import sofa3 from '/sofa3.png'
import sofa4 from '/sofa4.png'

function Arrivals() {
    const products = [
        { name: 'Arm Sofa', price: '$45.80', image: sofa1 },
        { name: 'Lounge Sofa', price: '$55.00', image: sofa2 },
        { name: 'Modern Chair', price: '$35.20', image: sofa3 },
        { name: 'Wooden Sofa', price: '$60.00', image: sofa4 },
    ];

    return (
        <div className="d-flex gap-5 px-4 py-5 align-items-center">
            <div className="flex-shrink-0" style={{ maxWidth: '300px' }}>
                <h2 className="mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>New Arrivals  <sup className="fs-6 "> (56)</sup></h2>
                <p>
                    We've designed and curated pieces that are a cut above your average home goods,
                    because when you level up your everyday objects, you elevate your daily rituals.
                </p>
                <a href="#" className="text-dark text-decoration-none fw-medium">VIEW ALL</a>
            </div>

            <div className="d-flex overflow-auto gap-4">
                {products.map((product, index) => (
                    <div key={index} className="product-card text-center flex-shrink-0">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="mb-2"
                        />
                        <div className="d-flex justify-content-between px-2">
                            <p className="fw-semibold mb-0">{product.name}</p>
                            <p className="text-muted mb-0">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Arrivals
