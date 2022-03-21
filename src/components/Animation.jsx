import React from "react";
import "./Animation.css";

const Animations = () => {
  return (
    <div>
      <section className="landing-page">
        <div className="container">
          <div className="content">
            <div className="content-details">
              <h1 className="title hue-shift">Welcome to my personal blog.</h1>
              <p className="description">
                Join my newsletter ! Suscribe to my newsletter to receive my new articles.
              </p>
              <div className="search">
                <input
                  type="text"
                  className="newsletter"
                  placeholder="Your email address"
                  required
                />
              </div>
              <div className="image-group hue-shift">
                <img src="/images/liq-5.png" alt="" className="blob-large" />
                <img src="/images/liq-4.png" alt="" className="blob-bean" />
              </div>
            </div>
          </div>
        </div>
        <img src="/images/liq-1.png" alt="" className="blob blob-1 hue-shift" />
        <img src="/images/liq-2.png" alt="" className="blob blob-2 hue-shift" />
        <img src="/images/liq-3.png" alt="" className="blob blob-3 hue-shift" />
        {/* <img src="/images/liq-6.png" alt="" className="blob blob-4 hue-shift" /> */}
      </section>
    </div>
  );
};

export default Animations;
