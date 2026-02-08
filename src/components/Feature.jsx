import React from 'react'
import sedan from '../assets/sedan.jpg'
import suv from '../assets/suv.jpg'
import van from '../assets/van.jpg'
import luxury from '../assets/luxury-cars.jpg'
import sport from '../assets/sport-car.jpg'
import cross from '../assets/crossover.jpg'
import { Link } from "react-router-dom"

function Feature() {
    return (
        <div className="container py-5">

            <h2 className="text-center mb-5">FEATURED CATEGORIES</h2>

            <div id="featureCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
                <div className="carousel-inner">

                    {/* First Slide */}
                    <div className="carousel-item active">
                        <div className="row g-4 justify-content-center">

                            <div className="col-md-4">
                                <div className="card h-100 shadow">
                                    <img src={sedan} className="card-img-top img-fluid" alt="Sedan" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">SEDAN</h5>
                                        <Link to="/CarListning">
                                            <button className="btn btn-primary">Go</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card h-100 shadow">
                                    <img src={suv} className="card-img-top img-fluid" alt="SUV" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">SUV</h5>
                                        <Link to="/CarListning">
                                            <button className="btn btn-primary">Go</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card h-100 shadow">
                                    <img src={luxury} className="card-img-top img-fluid" alt="Luxury" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">LUXURY CARS</h5>
                                        <Link to="/CarListning">
                                            <button className="btn btn-primary">Go</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Second Slide */}
                    <div className="carousel-item">
                        <div className="row g-4 justify-content-center">

                            <div className="col-md-4">
                                <div className="card h-100 shadow">
                                    <img src={sport} className="card-img-top img-fluid" alt="Sport" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">SPORT CARS</h5>
                                        <Link to="/CarListning">
                                            <button className="btn btn-primary">Go</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card h-100 shadow">
                                    <img src={van} className="card-img-top img-fluid" alt="Van" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">VANS</h5>
                                        <Link to="/CarListning">
                                            <button className="btn btn-primary">Go</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card h-100 shadow">
                                    <img src={cross} className="card-img-top img-fluid" alt="Crossover" />
                                    <div className="card-body text-center">
                                        <h5 className="card-title">CROSSOVER</h5>
                                        <Link to="/CarListning">
                                            <button className="btn btn-primary">Go</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button"
                    data-bs-target="#featureCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark rounded-circle"></span>
                </button>

                <button className="carousel-control-next" type="button"
                    data-bs-target="#featureCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon bg-dark rounded-circle"></span>
                </button>

            </div>

        </div>
    )
}

export default Feature
