import React from 'react'
import "./style.css"
export const Counter = () => {
  return (<section className="counter my-5">
  <div className="container">
    <div className="row p-5 text-white align-items-center justify-content-center">
      <div className="col-12 col-md-6 col-lg-3">
        <div className="counter-box">
          <h2 className="fw-bold">5500+</h2>
          <p>Satisfied Patron</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="counter-box">
          <h2 className="fw-bold">250+</h2>
          <p>Enthusiastic Cooks</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="counter-box">
          <h2 className="fw-bold">6500+</h2>
          <p>Preferred Dishes</p>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <div className="counter-box">
          <h2 className="fw-bold">10k+</h2>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
