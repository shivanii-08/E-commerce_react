import React from 'react'


export default function Cards(props) {
  return (
    <div>
      <div className="card col-lg-4" style={{ width: "18rem" }}>
  <img src={props.img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.text}</p>
    <a href="#" className="btn btn-primary">{props.button}</a>
  </div>
</div>

    </div>
  )
}
