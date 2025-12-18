import React from 'react';
import CustomerNavbar from '../components/CustomerNavbar';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import image from '../assets/back.png';
import { Button } from 'bootstrap';

function CustomerHome() {
  return (
    <>
      <CustomerNavbar />

      {/* Front Image */}
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          height: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>




{/* Search card */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <h2 className="text-center">CAR</h2>
        <div className="carousel-inner">
                {/* search */}
      <div>
<input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" style={{width:"300px" ,}}/>
<button class="btn btn-warning rounded-pill px-3" type="button">Search</button>
      </div>
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-3">
              {/* Cards here */}

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

      </div>

      <Feature />

      {/* Explore more popular cars */}
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <h2 className="text-center">EXPLORE MORE POPULAR CARS</h2>
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-3">
              {/* Cards here */}

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
              {/* Cards here */}
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
      </div>

      <Footer />
    </>
  );
}

export default CustomerHome;
