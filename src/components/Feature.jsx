import React from 'react'
import sedan from '../assets/sedan.jpg'
import suv from '../assets/suv.jpg'
import van from '../assets/van.jpg'
import luxury from '../assets/luxury-cars.jpg'
import sport from '../assets/sport-car.jpg'
import cross from '../assets/crossover.jpg'
import { Link } from "react-router-dom"

const slides = [
  [
    { title: "SEDAN", img: sedan, desc: "Comfort & Efficiency" },
    { title: "SUV", img: suv, desc: "Power & Spacious" },
    { title: "LUXURY CARS", img: luxury, desc: "Premium Elegance" },
  ],
  [
    { title: "SPORT CARS", img: sport, desc: "High Performance" },
    { title: "VANS", img: van, desc: "Group Travel & Cargo" },
    { title: "CROSSOVER", img: cross, desc: "Versatile & Dynamic" },
  ]
]

function Feature() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h6 className="text-warning text-uppercase tracking-wider fw-semibold mb-2">Explore Vehicles</h6>
        <h2 className="fw-bold text-white display-6">FEATURED CATEGORIES</h2>
      </div>

      <div id="featureCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-inner pb-4">
          {slides.map((slideItems, slideIndex) => (
            <div key={slideIndex} className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
              <div className="row g-4 justify-content-center">
                {slideItems.map((category, idx) => (
                  <div key={idx} className="col-lg-4 col-md-6">
                    <div 
                      className="card border-0 h-100 rounded-4 overflow-hidden position-relative shadow-lg"
                      style={{
                        backgroundColor: "#111827",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        transition: "all 0.3s ease-in-out"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-8px)"
                        e.currentTarget.style.borderColor = "rgba(245, 158, 11, 0.5)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)"
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)"
                      }}
                    >
                      {/* Image Container with Overlay */}
                      <div className="position-relative overflow-hidden" style={{ height: "220px" }}>
                        <img 
                          src={category.img} 
                          className="w-100 h-100" 
                          alt={category.title} 
                          style={{ objectFit: "cover" }} 
                        />
                        <div 
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            background: "linear-gradient(180deg, rgba(17,24,39,0) 0%, rgba(17,24,39,0.9) 100%)"
                          }}
                        />
                      </div>

                      {/* Card Body */}
                      <div className="card-body text-center p-4 d-flex flex-column justify-content-between">
                        <div>
                          <h5 className="card-title text-white fw-bold mb-1">{category.title}</h5>
                          <p className="text-secondary small mb-3">{category.desc}</p>
                        </div>
                        <Link to="/CarView">
                          <button className="btn btn-warning rounded-pill px-4 py-2 fw-semibold w-100 shadow-sm border-0"
                            style={{
                              backgroundColor: "#f59e0b",
                              color: "#0f172a",
                              letterSpacing: "0.5px"
                            }}>
                            Book Now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <button 
          className="carousel-control-prev" 
          type="button" 
          data-bs-target="#featureCarousel" 
          data-bs-slide="prev"
          style={{ width: "5%" }}
        >
          <span className="p-3 bg-dark bg-opacity-75 rounded-circle d-flex align-items-center justify-content-center">
            <span className="carousel-control-prev-icon"></span>
          </span>
        </button>

        <button 
          className="carousel-control-next" 
          type="button" 
          data-bs-target="#featureCarousel" 
          data-bs-slide="next"
          style={{ width: "5%" }}
        >
          <span className="p-3 bg-dark bg-opacity-75 rounded-circle d-flex align-items-center justify-content-center">
            <span className="carousel-control-next-icon"></span>
          </span>
        </button>
      </div>
    </div>
  )
}

export default Feature