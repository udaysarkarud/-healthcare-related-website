import React from 'react';
import { Link } from 'react-router-dom';
import aboutJpg from '../../../images/about.jpg'

const AboutSection = () => {
    return (
        <section className="container custom-section-margin" id="about">
            <div className="row gx-lg-5">
                <div className="col-12 col-md-6 my-5 my-lg-0">
                    <img style={{ border: "10px solid #0e1a60" }} className="img-fluid" src={aboutJpg} alt="" />
                </div>

                <div className="col-12 col-md-6">
                    <h3>Comprehensive Eye Care for All Ages From an Experienced Team</h3>
                    <p>Eye Care Plus is proud to have been serving communities in Texas, New Mexico, Oklahoma, and Colorado for over 14 years. We believe that our strong foundation has enabled us to build long-lasting relationships with our patients, allowing us to provide high-quality and personalized eye care. We are devoted to providing you and your family with honest advice and the information you need to protect your eyes and vision.</p>

                    <p>We are committed to you and your family. Whether you have particular requirements that necessitate special care, or you’re looking for a new pair of glasses or contact lenses and would appreciate expert advice, we are here for you.We are excited to be an essential member of your journey to strong and healthy eyes. Please book your appointment today.</p>

                    <p>We know you’re busy and that life often gets in the way. That’s why we offer a convenient and innovative drive-thru window to provide you with the best service possible. We provide several drive-thru services for all our patients, like product pick-ups or glasses adjustments. Simply drive up to the window, ring the bell, and a staff member will be there to help you. Open Monday to Friday, no appointment necessary!</p>

                    <Link to="/about" className="btn btn-outline-primary custom-btn btn-lg">Learn More</Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;