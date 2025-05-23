import React from 'react'
import socials1 from '../../assets/socials1.png'
import socials2 from '../../assets/socials2.png'
import socials3 from '../../assets/socials3.png'
import socials4 from '../../assets/socials4.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

function Socials() {
    return (
        <section className="py-4 px-4" style={{ backgroundColor: 'white' }}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center ">
                    <p className="mb-0">#Hallalab</p>
                    <p className="text-muted"><span><FontAwesomeIcon icon={faInstagram} /></span> FOLLOW US ON INSTAGRAM</p>
                </div>

                <div className="d-flex overflow-auto gap-2">
                    <img src={socials1} alt="socials1" className="img-fluid flex-shrink-0" />
                    <img src={socials2} alt="socials2" className="img-fluid flex-shrink-0" />
                    <img src={socials3} alt="socials3" className="img-fluid flex-shrink-0" />
                    <img src={socials4} alt="socials4" className="img-fluid flex-shrink-0" />
                </div>
            </div>
        </section>
    )
}

export default Socials
