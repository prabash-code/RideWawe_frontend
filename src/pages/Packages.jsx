import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

function Packages() {

   const packages = [
        {
            name: "Basic",
            price: "Rs. 5,000 / day",
            features: [
                "Small Cars (Hatchback)",
                "Fuel Included",
                "Limited Support",
                "No Driver"
            ]
        },
        {
            name: "Standard",
            price: "Rs. 10,000 / day",
            features: [
                "Sedan / SUV",
                "Fuel Included",
                "24/7 Support",
                "Optional Driver"
            ]
        },
        {
            name: "Premium",
            price: "Rs. 20,000 / day",
            features: [
                "Luxury Cars",
                "Fuel Included",
                "Priority Support",
                "Driver Included"
            ]
        }
    ];

  return (
    <> 
      <Navbar/>
      <div style={{ backgroundColor: "#0b0f19", color: "#f8fafc", minHeight: "100vh" }}>
         
            {/* HERO */}
            <div style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0b0f19 100%)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "80px 20px",
                textAlign: "center",
                color: "white"
            }}>
                <h1 className="fw-bold display-4 text-white">Our Packages 🚗</h1>
                <p className="text-white-50">Choose the best plan for your journey</p>
            </div>

            {/* PACKAGES */}
            <div className="container py-5">
                <div className="row g-4">

                    {packages.map((pkg, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card shadow rounded-4 h-100 border-0 text-center"
                                style={{
                                    backgroundColor: "#1e293b",
                                    color: "#fff",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    transition: "0.3s"
                                }}
                                onMouseOver={e => e.currentTarget.style.transform = "translateY(-10px)"}
                                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
                            >

                                <div className="card-body p-4 d-flex flex-column justify-content-between">
                                    <div>
                                        <h3 className="fw-bold text-white mb-2">{pkg.name}</h3>
                                        <h4 className="text-warning my-3 fw-bold">{pkg.price}</h4>

                                        <ul className="list-unstyled text-white-50 my-4 text-start mx-auto" style={{ maxWidth: "240px" }}>
                                            {pkg.features.map((f, i) => (
                                                <li key={i} className="mb-2 d-flex align-items-center">
                                                    <span className="text-warning me-2">✔</span> {f}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <Link to="/CarView">
                                        <button className="btn btn-warning rounded-pill px-4 mt-3 fw-bold w-100">
                                            Choose Plan
                                        </button>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

         
            <div style={{
                background: "linear-gradient(135deg, #1e293b 0%, #0b0f19 100%)",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                color: "white",
                padding: "60px 20px",
                textAlign: "center"
            }}>
                <h2 className="fw-bold text-white mb-2">Need Help Choosing?</h2>
                <p className="text-white-50 mb-4">Contact us anytime for guidance</p>
                <Link to="/Contact">
                    <button className="btn btn-warning rounded-pill px-5 fw-bold">
                        Contact Us
                    </button>
                </Link>
            </div>

      </div>
      <Footer />
    </>
  )
}

export default Packages