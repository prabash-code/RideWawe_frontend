import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axiosInstance from '../services/axiosInstance';


const BookingConformation = () => {
    const [car, setCar] = useState(null);
    const navigate = useNavigate();


    // const [customerId, setCustomerId] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [pickupLocation, setPickupLocation] = useState("");
    const [finalLocation, setFinalLocation] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [totalAmount, setTotalAmount] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const fetch = async () => {
            const res = await axiosInstance.get(`cars/${id}`);
            setCar(res.data);
        };
        fetch();


    }, [id])

    useEffect(() => {
    if (car) {
        setRegistrationNumber(car.registrationNumber);
        setTotalAmount(car.dailyRentalPrice); 
    }
}, [car]);



    const confirmBooking = async(e) => {
        e.preventDefault();

        const payLoad = {
            carId:id,
            // customerId: customerId,
            customerName: customerName,
            customerEmail: customerEmail,
            registrationNumber: registrationNumber,
            pickupLocation: pickupLocation,
            finalLocation: finalLocation,
            totalAmount: parseFloat(totalAmount),
            startDate: new Date(startDate).toISOString() ,
            endDate: new Date(endDate).toISOString()
        };
        try{
            const response = await axiosInstance.post("/bookings",payLoad);
            alert("Booking is conformed");
            
            const bookingId=response.data.id;

            navigate(`/payments/${bookingId}`);

        }catch(error){
            alert("Booking Failed");
        }

        

    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg p-5 rounded-5 border-0" style={{ maxWidth: "800px", width: "100%" }}>
                <h2 className="text-center fw-bold mb-5">
                    Confirm Your Booking <span role="img" aria-label="car">🚗</span>
                </h2>

                <form onSubmit={confirmBooking}>
                    <div className="row g-4">
                        {/* Row 1 */}
                        {/* <div className="col-md-6">
                            <label className="form-label fw-bold small">Customer ID</label>
                            <input type="number" name="customerId" className="form-control p-3 bg-light border-0 rounded-3" placeholder="ID Number" value={customerId} onChange={(e) => setCustomerId(e.target.value)} required />
                        </div> */}
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Email Address</label>
                            <input type="email" name="customerEmail" className="form-control p-3 bg-light border-0 rounded-3" placeholder="example@mail.com" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} required />
                        </div>

                        {/* Row 2 */}
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Full Name</label>
                            <input type="text" name="customerName" className="form-control p-3 bg-light border-0 rounded-3" placeholder="John Doe" value={customerName} onChange={(e) => setCustomerName(e.target.value)} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Car Registration Number</label>
                            <input type="text" name="registrationNumber" className="form-control p-3 bg-light border-0 rounded-3" placeholder="WP-BC-1234" value={registrationNumber} onChange={(e) => setRegistrationNumber(e.target.value)} required />
                        </div>

                        {/* Row 3 */}
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Pickup Location</label>
                            <div className="input-group bg-light rounded-3">
                                <input type="text" name="pickupLocation" className="form-control p-3 bg-transparent border-0" placeholder="Location A" value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} required />
                                <span className="input-group-text bg-transparent border-0 opacity-50">📍</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Final Destination</label>
                            <div className="input-group bg-light rounded-3">
                                <input type="text" name="finalLocation" className="form-control p-3 bg-transparent border-0" placeholder="Location B" value={finalLocation} onChange={(e) => setFinalLocation(e.target.value)} required />
                                <span className="input-group-text bg-transparent border-0 opacity-50">🏁</span>
                            </div>
                        </div>

                        {/* Row 4 */}
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">Start Date & Time</label>
                            <input type="datetime-local" name="startDate" className="form-control p-3 bg-light border-0 rounded-3" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label fw-bold small">End Date & Time</label>
                            <input type="datetime-local" name="endDate" className="form-control p-3 bg-light border-0 rounded-3" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                        </div>

                        {/* Amount */}
                        <div className="col-md-12">
                            <label className="form-label fw-bold small">Total Amount ($)</label>
                            <input type="number" name="totalAmount" className="form-control p-3 bg-light border-0 rounded-3 text-center fw-bold" placeholder="0.00" value={totalAmount} onChange={(e) => setTotalAmount(e.target.value)} required />
                        </div>


                        {/* Button */}
                        <div className="col-12 mt-5">
                            <button type="submit" className="btn btn-warning w-100 p-3 fw-bold rounded-pill shadow" style={{ backgroundColor: "#ff6624", color: "white", border: "none" }}>
                                CONFIRM BOOKING NOW
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingConformation;