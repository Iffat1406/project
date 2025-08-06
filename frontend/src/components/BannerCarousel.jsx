import React, {useEffect} from "react";


// BannerCarousel.jsx
const BannerCarousel = () => {
  useEffect(() => {
    // Ensure Bootstrap carousel is initialized (only if needed)
    const carouselEl = document.querySelector("#homeCarousel");
    if (window.bootstrap) {
      new window.bootstrap.Carousel(carouselEl, {
        interval: 3000,
        ride: "carousel"
      });
    }
  }, []);
<style>
  
</style>

  return (
    <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/banner1.jpg" className="d-block w-100" alt="Banner 1" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Welcome to Our Site</h5>
            <p>Discover amazing deals today!</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/banner2.jpg" className="d-block w-100" alt="Banner 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5>New Arrivals</h5>
            <p>Check out the latest collection</p>
            <button className="btn btn-success">Explore</button>
          </div>
        </div>

        <div className="carousel-item">
          <img src="/images/vite.svg" className="d-block w-100" alt="Banner 3" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Fast & Modern</h5>
            <p>Built with Vite + React</p>
            <button className="btn btn-warning">Learn More</button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>

      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" className="active" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" />
        <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" />
      </div>
    </div>
  );
};

export default BannerCarousel;
