import React from 'react';
import './shopByRoom.css'; 

function ShopByRoom() {
    return (
        <section className="py-5 text-center" style={{ backgroundColor: '#f9f7f4' }}>
            <div className="container px-4 px-lg-5">
                <p className="text-uppercase text-muted small mb-4">Shop by room</p>

                <div
                    className="d-flex flex-wrap justify-content-center align-items-center gap-3"
                    style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem' }}
                >
                    <span className="room-link">
                        Kitchen Room <sup className="fs-6 ms-1">(19)</sup>
                    </span>
                    <span className="mx-2">/</span>

                    <span className="room-link text-muted">
                        Living Room <sup className="fs-6 ms-1">(35)</sup>
                    </span>
                    <span className="mx-2">/</span>

                    <span className="room-link text-muted">
                        Home Office <sup className="fs-6 ms-1">(99)</sup>
                    </span>
                    <span className="mx-2">/</span>

                    <span className="room-link text-muted">
                        EntryWay <sup className="fs-6 ms-1">(51)</sup>
                    </span>
                    <span className="mx-2">/</span>

                    <span className="room-link text-muted">
                        Dining Room <sup className="fs-6 ms-1">(15)</sup>
                    </span>
                    <span className="mx-2">/</span>

                    <span className="room-link text-muted">
                        Kids Room <sup className="fs-6 ms-1">(75)</sup>
                    </span>
                    <span className="mx-2">/</span>

                    <span className="room-link text-muted">
                        Bedroom <sup className="fs-6 ms-1">(99)</sup>
                    </span>
                </div>
            </div>
        </section>
    );
}

export default ShopByRoom;
