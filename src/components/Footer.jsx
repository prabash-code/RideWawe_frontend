import React from 'react';
import bgFooter from '../assets/footer-bg.jpg';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
    return (
        <footer
            className="text-light py-5 position-relative"
            style={{
                backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
          url(${bgFooter})
        `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* Social Icons */}
                <div className="d-flex justify-content-end mb-4">
                    <a href="https://www.facebook.com/share/1Cu9uswuuN/?mibextid=wwXIfr" className="text-light fs-5 me-3">
                        <img src={facebook} alt="facebook" width={40} height={40} />
                    </a>

                    <a href="https://www.instagram.com/withaz__99?igsh=dzBtMnA0cm5nZzVn&utm_source=ig_contact_invite" className="text-light fs-5 me-3">
                        <img src={instagram} alt="instagram" width={40} height={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/prabash-withanachchi/" className="text-light fs-5">
                        <img src={linkedin} alt="linkedin" width={40} height={40} />
                    </a>
                </div>

                {/* Footer content */}
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-4">

                    {/* Brand */}
                    <div className="col mb-3">
                        <h5>RideWawe</h5>
                        <p>Reliable, affordable car rentals for every journey.</p>
                        <p>© 2025 RideWawe</p>
                    </div>

                    {/* Navigation */}
                    <div className="col mb-3">
                        <h5>Navigation</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="/Home" className="nav-link p-0 text-light">Home</a></li>
                            <li className="nav-item mb-2"><a href="/Bookings" className="nav-link p-0 text-light">Bookings</a></li>
                            <li className="nav-item mb-2"><a href="/Packages" className="nav-link p-0 text-light">Packages</a></li>
                            <li className="nav-item mb-2"><a href="/About" className="nav-link p-0 text-light">About Us</a></li>
                            <li className="nav-item mb-2"><a href="/Contact" className="nav-link p-0 text-light">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="col mb-3">
                        <h5>Services</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Daily Rentals</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Monthly Rentals</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Airport Pickup</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Chauffeur Service</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col mb-3">
                        <h5>Support</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Terms & Conditions</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col mb-3">
                        <h5>Contact</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><span className="nav-link p-0 text-light">+94 77 123 4567</span></li>
                            <li className="nav-item mb-2"><span className="nav-link p-0 text-light">info@ridewawe.com</span></li>
                            <li className="nav-item mb-2"><span className="nav-link p-0 text-light">Colombo, Sri Lanka</span></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;
