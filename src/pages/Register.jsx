import React, { useState } from 'react'
import axiosInstance from '../services/axiosInstance';

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [id, setId] = useState("");
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(password)
        console.log(phone)
        console.log(id)

        try {
            const payload = {
                name: name,
                email:email,
                password:password,
                phone:phone,
                id:id
            };

            // Use the axios instance
            const response = await axiosInstance.post("/user/register", payload);
            console.log("Response:", response.data);
        } catch (err) {
            console.error("Error:", err);
        }
    };


    return (
        <div>
            <form>
                <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img>
                <h1 class="h3 mb-3 fw-normal">Sign In </h1>
                <div class="form-floating">

                    <input type="name" onChange={e => setName(e.target.value)} class="form-control" id="floatingName" placeholder="saman perera"></input>
                    <label for="floatingInput">Name</label> </div> <div class="form-floating">

                    <input type="email" onChange={e=>setEmail(e.target.value)} class="form-control" id="floatingEmail" placeholder="name@example.com"></input>
                    <label for="floatingInput">Email address</label> </div> <div class="form-floating">

                    <input type="password" class="form-control" onChange={e=>setPassword(e.target.value)} id="floatingPassword" placeholder="Password">
                    </input>
                    <label for="floatingPassword">Password</label> </div> <div class="form-floating">

                    <input type="phone" onChange={e=>setPhone(e.target.value)} class="form-control" id="floatingPhone" placeholder="0771111111">
                    </input>
                    <label for="floatingPassword">Phone</label> </div> <div class="form-floating">

                    <input type="id" onChange={e=>setId(e.target.value)} class="form-control" id="floatingId" placeholder="86592665V">
                    </input>
                    <label for="floatingPassword">Id</label> </div> <div class="form-floating">

                </div>

                <button class="btn btn-primary w-100 py-2" onClick={e => handleSubmit(e)} type="submit">Sign Up</button>
                <p class="mt-5 mb-3 text-body-secondary">© 2017–2025</p>
            </form>

        </div>
    )
}


export default Register