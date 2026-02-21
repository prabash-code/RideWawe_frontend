import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Feature from '../components/Feature'
import image from '../assets/back.png'
import benzImg from '../assets/benz.jpg'
import { Link } from 'react-router-dom'
import axiosInstance from '../services/axiosInstance'

function Home() {
    const [car, setCar] = useState()
    const [feedback, setFeedback] = useState([])

    useEffect(() => {
    const fetchFeedback = async () => {
        try {
            const res = await axiosInstance.get("/feedback");
            setFeedback(res.data);  
        } catch (err) {
            console.error("Error:", err);
            alert("Feedback not fetch !");
        }
    };

    fetchFeedback();

    }, []);

    return (
        <div style={{ backgroundColor: "#fdfdfd" }}>
            <Navbar />


            <div style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "700px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white"
            }}>

                <button className="btn btn-warning btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg"
                    style={{ backgroundColor: "#ff8c00", border: "none" }}>
                    RENT NOW
                </button>
            </div>

            {/* 2. Feature Component */}
            <div className="container py-5">
                <Feature />
            </div>

            {/* 3. Explore Cars Carousel */}
            <div className="container py-5">
                <h2 className="text-center fw-bold mb-5">EXPLORE MORE POPULAR CARS</h2>
                <div id="carCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center gap-4">
                                {['Sedan', 'SUV', 'Luxury', 'Van'].map((type) => (
                                    <div className="card border-0 shadow-sm rounded-4" style={{ width: '18rem' }} key={type}>
                                        <img src={benzImg} className="card-img-top rounded-top-4" alt={type} />
                                        <div className="card-body text-center">
                                            <h5 className="fw-bold">{type}</h5>
                                            <a href="#" className="btn btn-outline-primary rounded-pill">View Details</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 4. 3 Steps Section */}
            <div className="container py-5 my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={benzImg} alt="Steps" className="img-fluid rounded-5 shadow-lg" />
                    </div>
                    <div className="col-md-6 ps-md-5">
                        <h2 className="fw-bold mb-4">RENT CARS IN 3 STEPS</h2>
                        <div className="list-group">
                            <div className="list-group-item border-0 bg-light rounded-4 mb-3 p-4 shadow-sm">
                                <h6 className="fw-bold mb-1">CHOOSE DATE & LOCATION</h6>
                                <span className="small opacity-75">Pick your preferred date & place</span>
                            </div>
                            <div className="list-group-item border-0 bg-light rounded-4 mb-3 p-4 shadow-sm">
                                <h6 className="fw-bold mb-1">BOOK YOUR CAR</h6>
                                <span className="small opacity-75">Reserve your car in seconds</span>
                            </div>
                            <div className="list-group-item border-0 bg-light rounded-4 p-4 shadow-sm">
                                <h6 className="fw-bold mb-1">SELECT TIME DURATION</h6>
                                <span className="small opacity-75">Choose how long you need it</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container" style={{ marginTop: "-50px", position: "relative", zIndex: "10" }}>
                <div className="bg-white shadow-lg rounded-pill p-2 d-flex align-items-center justify-content-between flex-wrap"
                    style={{ border: "1px solid #eee" }}>



                    {/* Pick Up Location */}
                    <div className="px-4 border-end">
                        <label className="d-block small text-muted fw-bold text-uppercase" style={{ fontSize: '10px' }}>Pick Up Location</label>
                        <select className="form-select border-0 p-0 fw-bold shadow-none" style={{ fontSize: '14px', cursor: 'pointer' }}>
                            <option>Select Location</option>
                            <option>Airport</option>
                            <option>City Center</option>
                        </select>
                    </div>

                    {/*endLocation */}
                    <div className="px-4 border-end">
                        <label className="d-block small text-muted fw-bold text-uppercase" style={{ fontSize: '10px' }}>Final Location</label>
                        <select className="form-select border-0 p-0 fw-bold shadow-none" style={{ fontSize: '14px', cursor: 'pointer' }}>
                            <option>Select Location</option>
                            <option>Airport</option>
                            <option>City Center</option>
                        </select>
                    </div>

                    {/* Pick Up Date */}
                    <div className="px-4 border-end">
                        <label className="d-block small text-muted fw-bold text-uppercase" style={{ fontSize: '10px' }}>Pick Up Date</label>
                        <input type="date" className="form-control border-0 p-0 fw-bold shadow-none" style={{ fontSize: '14px' }} />
                    </div>

                    {/* Return Date */}
                    <div className="px-4 border-end">
                        <label className="d-block small text-muted fw-bold text-uppercase" style={{ fontSize: '10px' }}>Return Date</label>
                        <input type="date" className="form-control border-0 p-0 fw-bold shadow-none" style={{ fontSize: '14px' }} />
                    </div>

                    {/* Submit Button */}
                    <div className="ps-3 pe-2">
                        <Link to={"/BookingConformation"}>
                            <button className="btn btn-warning rounded-pill px-5 py-3 fw-bold"
                                style={{ backgroundColor: "#ffb400", border: "none", color: "#000" }}>
                                Rent Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* 5. Customer Feedback Carousel */}
            <div className="container py-5 mb-5">
                <h2 className="text-center fw-bold mb-5">OUR CLIENTS FEEDBACKS</h2>
                <div id="feedbackCarousel" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-flex justify-content-center gap-4">
                                {feedback.map((i) => (
                                    <div className="card border-0 bg-light p-4 rounded-4 shadow-sm" style={{ width: '22rem' }} key={i.id}>
                                        <div className="text-warning mb-2">{i.ratings}</div>
                                        <p className="card-text">{i.review}</p>
                                        <h6 className="fw-bold mb-0 mt-3">Customer {i.name}</h6>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </div>
    )
}

export default Home