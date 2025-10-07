import React, { useEffect } from "react";

const BannerCarousel = () => {
  useEffect(() => {
    const carouselEl = document.querySelector("#homeCarousel");
    if (window.bootstrap) {
      new window.bootstrap.Carousel(carouselEl, {
        interval: 3000,
        ride: "carousel"
      });
    }
  }, []);

  return (
    <div
      id="homeCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="/images/banner1.jpg"
            className="d-block w-100"
            alt="Banner 1"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h5 className="display-4 fw-bold">Welcome to Our Site</h5>
            <p className="fs-4">Discover amazing deals today!</p>
            <button className="btn btn-lg btn-primary mt-3">Shop Now</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="/images/banner2.jpg"
            className="d-block w-100"
            alt="Banner 2"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h5 className="display-4 fw-bold">New Arrivals</h5>
            <p className="fs-4">Check out the latest collection</p>
            <button className="btn btn-lg btn-success mt-3">Explore</button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="/images/vite.svg"
            className="d-block w-100"
            alt="Banner 3"
          />
          <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
            <h5 className="display-4 fw-bold">Fast & Modern</h5>
            <p className="fs-4">Built with Vite + React</p>
            <button className="btn btn-lg btn-warning mt-3">Learn More</button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homeCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#homeCarousel"
          data-bs-slide-to="0"
          className="active"
        />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" />
      </div>
    </div>
  );
};

export default BannerCarousel;
