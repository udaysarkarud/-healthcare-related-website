import React from 'react';
import bannerImg from '../../../images/banner-bg.jpg'

const BannerSection = () => {

    return (
        <section className="hero-banner" id="home-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 my-5">
                        <div className="banner-text-wrap">
                            <h1 className="text-white">We Provide Best Medical Services</h1>
                            <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy</p>
                            <a href="#" className="btn btn-outline-light btn-lg">Book Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerSection;