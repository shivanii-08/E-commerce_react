import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {
    const [data,setData]=useState({
        username:"",
        email:"",
        number:"",
        password:"",
        pincode:"",
        state:"",
        address:""
    })
    //on change function
    const onHandle=(e)=>{
        setData({
            ...data,
            [e.target.name]:e.target.value,
        })
        console.log(e.target.value)
    }
    //axios...
    const onSubmitData=(e)=>{
        e.preventDefault();
        axios({
            method:"post",
            URL: 'https://jsonplaceholder.typicode.com/comments',
            data:data
        }).then((res)=>{
            toast.success(res.data.message)
        }).catch((err)=>{
            toast.error("failed to send")
        })
    }
  return (
    <div>
    <ToastContainer/>
      <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px;" }}>
                        <p className="fs-5 fw-medium text-primary">Register Us</p>
                        <h1 className="display-5 mb-5 fw-bold">Please Register Your Account</h1>
                    </div>
                    <div className="row ">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h3 className="mb-4">Need a functional contact form?</h3>
                            <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                            <form method='post' onSubmit={onSubmitData} >
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"
                                                name="username"
                                                 onChange={onHandle}
                                                 value={data.username}
                                               />
                                            <label htmlFor="name">Your Name</label>
                                        </div>
                                    </div>
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
                                            <input type="text" className="form-control" id="phone" placeholder="Number"
                                                name='phone'
                                                 onChange={onHandle}
                                                 value={data.phone}
                                            />
                                            <label htmlFor="phone">Number</label>
                                        </div>
                                    </div>

                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="password" className="form-control" id="subject" placeholder="password"
                                                name='password'
                                                 onChange={onHandle}
                                                 value={data.password}
                                             />
                                            <label htmlFor="password">password</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="city" placeholder="city"
                                                name='pincode'
                                                 onChange={onHandle}
                                                 value={data.pincode}
                                           />
                                            <label htmlFor="pincode">Pincode</label>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="state" placeholder="state"
                                                name='state'
                                                 onChange={onHandle}
                                                 value={data.state}
                                            />
                                            <label htmlFor="state">state</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "200px;" }}
                                                name="address"
                                                 onChange={onHandle}
                                                 value={data.address}
                                            ></textarea>
                                            <label htmlFor="address">Address</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary rounded-pill py-3 px-5" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
