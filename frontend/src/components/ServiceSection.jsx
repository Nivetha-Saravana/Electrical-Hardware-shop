import React from 'react';

function ServicesSection() {
  return (
    <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p>Check out the great services we offer</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div className="icon-box">
              <div className="icon"><i className="bx bxs-dollar-circle"></i></div>
              <h4 className="title">Best Price</h4>
              <p className="description">All our products are at highly affordable prices with highest quality available in the market.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-support"></i></div>
              <h4 className="title">Best Service</h4>
              <p className="description">We have been consistently offering a good service to all of our customers.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-award"></i></div>
              <h4 className="title">Best Quality</h4>
              <p className="description">Ensuring product authenticity and quality that's our motto. All of our products are of premium quality.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bx bx-water"></i></div>
              <h4 className="title">Best plumbing/irrigation solutions</h4>
              <p className="description">We have different and unique solutions to handle your specific requirements. We have a wide range of products to help meet your requirements.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesSection;
