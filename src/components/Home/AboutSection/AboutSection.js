import React from 'react';
import aboutJpg from '../../../images/about.jpg'

const AboutSection = () => {
    return (
        <section className="container custom-section-margin" id="about">
            <div className="row gx-lg-5">
                <div className="col-12 col-md-6 my-5 my-lg-0">
                    <img style={{ border: "10px solid #0e1a60" }} className="img-fluid" src={aboutJpg} alt="" />
                </div>

                <div className="col-12 col-md-6">
                    <h3>About Us</h3>
                    <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum
                        has been the industry's standard dummy
                    </p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release</p>

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release</p>
                    <a href="#" className="btn btn-outline-primary custom-btn btn-lg">Learn More</a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;