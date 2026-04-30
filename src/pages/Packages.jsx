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
      <div style={{ backgroundColor: "#f8f9fa" }}>
         
            {/* HERO */}
            <div style={{
                background: "linear-gradient(135deg, #ffb400, #e9e4de)",
                padding: "80px 20px",
                textAlign: "center",
                color: "white"
            }}>
                <h1 className="fw-bold display-4">Our Packages 🚗</h1>
                <p>Choose the best plan for your journey</p>
            </div>

            {/* PACKAGES */}
            <div className="container py-5">
                <div className="row">

                    {packages.map((pkg, index) => (
                        <div className="col-md-4 mb-4" key={index}>
                            <div className="card shadow rounded-4 h-100 border-0 text-center"
                                style={{ transition: "0.3s" }}
                                onMouseOver={e => e.currentTarget.style.transform = "translateY(-10px)"}
                                onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
                            >

                                <div className="card-body p-4">
                                    <h3 className="fw-bold">{pkg.name}</h3>
                                    <h4 className="text-warning my-3">{pkg.price}</h4>

                                    <ul className="list-unstyled">
                                        {pkg.features.map((f, i) => (
                                            <li key={i} className="mb-2">
                                                ✔ {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <Link to="/CarView">
                                        <button className="btn btn-warning rounded-pill px-4 mt-3">
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
                background: "#222",
                color: "white",
                padding: "60px 20px",
                textAlign: "center"
            }}>
                <h2 className="fw-bold">Need Help Choosing?</h2>
                <p>Contact us anytime for guidance</p>
                <Link to="/Contact">
                <button className="btn btn-warning rounded-pill px-5">
                    Contact Us
                </button>
                </Link>
            </div>

           
        </div>

    
   
    <Footer></Footer>
    </>
    
  )
}

export default Packages