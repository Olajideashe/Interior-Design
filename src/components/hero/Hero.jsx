import React from 'react';
import hero from '/hero.png';

function Hero() {
    return (
        <section style={{ backgroundColor: '#f9f7f4', padding: '80px 0' }}>
            <div className="container d-flex align-items-center justify-content-between flex-wrap-reverse">
                <div className="text-start" style={{ flex: '1 1 50%', paddingRight: '30px' }}>
                    <p style={{ fontFamily:'Playfair Display, serif', fontSize: '2.7rem', fontWeight: 'bold', lineHeight: '1.3' }}>
                    WE OFFERING YOU THE<br />
                    BEST HOME DECOR<br />
                    PRODUCTS & ITEMS FOR<br />
                    A DREAM HOME
                </p>
                <button className="btn btn-outline-dark mt-3">
                    EXPLORE OUR PRODUCTS
                </button>
            </div>
            <div style={{ flex: '1 1 50%' }}>
                <img src={hero} alt="Hero" className="img-fluid" />
            </div>
        </div>
    </section >
  );
}

export default Hero;
