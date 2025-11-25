import React from 'react';
import BannerCarousel from '../components/BannerCarousel';

const Home = () => {
  return (
    <div>
      {/* 1️⃣ Banner Carousel */}
      <BannerCarousel />

      2️⃣ Features / Why Choose Us
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Why Choose Us?</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">
                <i className="bi bi-speedometer2 display-4 text-primary"></i>
                <h5 className="mt-2">High-Speed Internet</h5>
                <p>Enjoy fast and reliable internet for all your needs.</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">
                <i className="bi bi-telephone display-4 text-success"></i>
                <h5 className="mt-2">24/7 Support</h5>
                <p>Our team is always ready to help you anytime.</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">
                <i className="bi bi-tv display-4 text-warning"></i>
                <h5 className="mt-2">HD Cable Packages</h5>
                <p>Access premium channels and entertainment bundles.</p>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">
                <i className="bi bi-wallet2 display-4 text-danger"></i>
                <h5 className="mt-2">Affordable Plans</h5>
                <p>Plans that fit your budget without compromising quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Internet Plans */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Internet Plans</h2>
          <div className="row justify-content-center">
            {[ 'Basic', 'Standard', 'Premium' ].map((plan, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card text-center h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{plan} Plan</h5>
                    <p className="card-text">{(index+1)*50} Mbps</p>
                    <h4>${29 + index*20}/mo</h4>
                    <button className="btn btn-primary mt-3">Subscribe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4️⃣ Cable Plans */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Cable TV Plans</h2>
          <div className="row justify-content-center">
            {[ 'Basic', 'Entertainment', 'Premium' ].map((plan, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <div className="card text-center h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{plan} Package</h5>
                    <p className="card-text">{5 + index*5} HD Channels</p>
                    <h4>${19 + index*15}/mo</h4>
                    <button className="btn btn-success mt-3">Subscribe</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5️⃣ Customer Testimonials */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">What Our Customers Say</h2>
          <div className="row justify-content-center">
            {[1,2,3].map((item) => (
              <div className="col-md-4 mb-3" key={item}>
                <div className="card p-3 shadow-sm">
                  <p>"Excellent service! Fast internet and great cable packages."</p>
                  <h6 className="text-end">- Customer {item}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6️⃣ Special Offers / Promotions */}
      <section className="py-5 bg-warning text-white text-center">
        <div className="container">
          <h2>Limited Time Offer!</h2>
          <p>Get 20% off on all internet & cable bundles.</p>
          <button className="btn btn-dark btn-lg mt-2">Grab Now</button>
        </div>
      </section>

{/* 7️⃣ Blog / News */}
{/* <section className="py-5">
  <div className="container">
    <h2 className="text-center mb-4">Latest News & Tips</h2>
    <div className="row justify-content-center">
      {[1, 2, 3].map((post) => (
        <div className="col-md-4 mb-4" key={post}>
          <div className="card blog-card h-100 shadow-sm border-0">
            <div className="overflow-hidden">
              <img
                src="/images/vite.svg"
                className="card-img-top blog-img"
                alt={`Blog ${post}`}
              />
            </div>
            <div className="card-body blog-body">
              <h5 className="card-title">Blog Post {post}</h5>
              <p className="card-text">
                Quick tips to improve your internet speed and entertainment experience.
              </p>
              <button className="btn btn-outline-primary blog-btn">Read More →</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section> */}


      {/* 8️⃣ FAQ */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Frequently Asked Questions</h2>
          <div className="accordion" id="faqAccordion">
            {[1,2,3].map((q) => (
              <div className="accordion-item" key={q}>
                <h2 className="accordion-header" id={`heading${q}`}>
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${q}`} aria-expanded="false" aria-controls={`collapse${q}`}>
                    FAQ Question {q}?
                  </button>
                </h2>
                <div id={`collapse${q}`} className="accordion-collapse collapse" aria-labelledby={`heading${q}`} data-bs-parent="#faqAccordion">
                  <div className="accordion-body">
                    Answer to FAQ question {q}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
