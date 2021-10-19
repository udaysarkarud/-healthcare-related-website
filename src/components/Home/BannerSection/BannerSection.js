import React from 'react';

const BannerSection = () => {

    return (
        <section className="hero-banner" id="home-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-5">
                        <div className="banner-text-wrap">
                            <h1 className="text-white">We Provide Best EyeCare Services</h1>
                            <p className="text-white">Our eyes are one of our most important senses, allowing us to better perceive and understand the world, so we must take proper care of them. At Eye Care Plus, we provide you and your family with caring and compassionate eye care to keep your eyes happy and healthy.</p>
                            <a href="/appointment" className="btn btn-outline-light btn-lg">Book Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;