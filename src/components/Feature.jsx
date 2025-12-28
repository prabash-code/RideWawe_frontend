import React from 'react'
import sedan from '../assets/sedan.jpg'
import suv from '../assets/suv.jpg'
import van from '../assets/van.jpg'
import luxury from '../assets/luxury-cars.jpg'
import sport from '../assets/sport-car.jpg'
import cross from '../assets/crossover.jpg'

function Feature() {
    return (
        <div>
            <h2 className="text-center">FEATURED CATEGORIES</h2>
            <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">

                <div class="card" style={{ width: "18rem" }}>
                    <img src={sedan} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SEDAN</h5>
                        <a href="#" class="btn btn-primary"> Go</a>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img src={suv} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SUV</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img src={luxury} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">LUXURY CARS</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img src={sport} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">SPORT CARS</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                <div class="card" style={{ width: "18rem" }}>
                    <img src={van} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">VANS</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
                <div class="card" style={{ width: "18rem" }}>
                    <img src={cross} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">CROSSOVER</h5>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feature