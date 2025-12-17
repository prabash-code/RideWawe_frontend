import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Feature from '../components/Feature'
import image from '../assets/back.png'
import benzImg from '../assets/benz.jpg'



function Home() {
    return (
        <div>
            <Navbar />

            {/* front image */}

            <div style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                height: "700px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
            </div>

            <Feature />

            {/* Explore more popular cars */}

            <div id="carouselExample" className="carousel slide">
                <h2 className="text-center">EXPLORE MORE POPULAR CARS</h2>
                <div className="carousel-inner">


                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center gap-3">

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center gap-3">

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            {/* 3steps image */}
            {/* 3 steps section */}
            <div className="container my-5">
                <div className="d-flex justify-content-center align-items-stretch">

                    {/* Left image */}
                    <div className="me-4 " style={{ flex: "0.5 0 300px" }}>
                        <img
                            src={benzImg}
                            alt="Car Steps"
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                    </div>

                    {/* Right side steps */}
                    <div className="flex-grow-1  " style={{ maxWidth: "500px" }}>
                        <h2 className="mb-4 text-center">RENT CARS IN 3 STEPS</h2>

                        <label className="list-group-item rounded-3 py-3 fw-bold text-center">
                            CHOOSE DATE & LOCATION
                            <span className="d-block small opacity-50 ">
                                Pick your preferred date & place
                            </span>
                        </label>

                        <label className="list-group-item rounded-3 py-3 mt-2 fw-bold text-center">
                            BOOK YOUR CAR
                            <span className="d-block small opacity-50">
                                Reserve your car in seconds
                            </span>
                        </label>

                        <label className="list-group-item rounded-3 py-3 mt-2 fw-bold text-center">
                            SELECT TIME DURATION
                            <span className="d-block small opacity-50">
                                Choose how long you need it
                            </span>
                        </label>
                    </div>

                </div>
            </div>

            {/* Customer feedback */}

            <div id="carouselExample" className="carousel slide">
                <h2 className="text-center">OUR CLIENTS FEEDBACKS</h2>
                <div className="carousel-inner">

                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center gap-3">

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center gap-3">

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                            <div className="card" style={{ width: '18rem' }}>
                                <img src="..." className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>



            <Footer />

        </div>
    )
}

export default Home