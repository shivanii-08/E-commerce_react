import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    //..onchange function
    const onHandle = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    
    const onSubmitData = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            URL: 'https://jsonplaceholder.typicode.com/comments',
            data: data
        }).then((res) => {
            toast.success(res.data.message)
        }).catch((err) => {
            toast.error("failed to login")
        })
    }
    return (
        <>
        <ToastContainer/>
        <form onSubmit={onSubmitData} className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px;" }}>
                    <p className="fs-5 fw-medium text-primary">Register Us</p>
                    <h1 className="display-5 mb-5 fw-bold">Please Login Your Account</h1>
                </div>
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h3 className="mb-4">Need a functional contact form?</h3>
                        <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                        <form method='post' />
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"
                                        name="email"
                                        onChange={onHandle}
                                        value={data.email}
                                    />
                                    <label htmlFor="email">Your Email</label>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="subject" placeholder="password"
                                        name='password'
                                        onChange={onHandle}
                                        value={data.password}
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                            </div>
                            <h6><Link to='/Registration'>Create your account</Link></h6>
                            <div className="col-12">
                                <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        </>
    )
}
