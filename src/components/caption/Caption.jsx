import React from 'react';
import capup from '/capup.png'
import capdwn from '/capdwn.png';

function CaptionSection() {
    return (
        <section className="position-relative py-5 text-center" style={{ backgroundColor: 'white' }}>
          
            <img
                src={capup}
                alt="Decorative top"
                className="position-absolute"
                style={{ top: '30px', left: '30px', width: '250px', borderRadius: '80px', zIndex: 1 }}
            />

            <div className="container d-flex justify-content-center align-items-center flex-column" style={{ minHeight: '300px' }}>
                <h2 className="mb-3 fst-italic" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.5rem' }}>
                   The Halal Interior 
                </h2>
                <p className="lead text-muted" style={{ maxWidth: '600px' }}>
                    We believe in designing spaces that bring warmth, comfort, and beauty to everyday living. Welcome to a home full of meaning.
                </p>
            </div>

              <img
                src={capdwn}
                alt="Decorative bottom"
                className="position-absolute"
                style={{ bottom: '30px', right: '30px', width: '250px', borderRadius: '80px', zIndex: 1 }}
            />
        </section>
    );
}

export default CaptionSection;
