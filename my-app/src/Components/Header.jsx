import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
export default function Header() {
  const navigate=useNavigate()
  const myData=useSelector((state)=>state.CARDDATA)
  console.log(myData.length)
  const onadd=(images,id,title,description,category,price,rating)=>{
    navigate("/productdetails",{
      state:{
          img:images,
          id:id,
          title:title,
          desc:description,
          category:category,
          price:price,
          rating:rating
      }
  })
  }
  return (
    <>
      <div className='sticky-top'>
        <nav className="navbar navbar-expand-lg bg-dark text-light">
          <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
              <h2><b>My Cart</b></h2>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="nav-item ms-2 ">
                  <Link to="/" className="nav-link active" aria-current="page" href="#">
                  Home
                  </Link>
                </div>
                
                <div className="container ms-4 me-3">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-1 px-1 btn-outline-light"
                      type="search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-light" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="navbar-nav ms-0 ">
                <div className="nav-item me-2">
                  <Link to="login" className="nav-link text-light" href="#">
                <i className='fas fa-user-alt text-light'></i>
                    Login
                  </Link>
                </div>
                <div className="nav-item me-2 text-light">
                  <a className="nav-link">
                    <i className="fa fa-shopping-cart text-light">{myData.length}</i>
                    <small className='text-light' onClick={onadd}>Cart</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
