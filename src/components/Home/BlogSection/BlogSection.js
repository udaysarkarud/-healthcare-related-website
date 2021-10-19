import React from 'react';
import blogImg from '../../../images/blog1.jpg'

const BlogSection = () => {
    return (
        <section className="container my-5" id="blog">
            <div className="row">
                <div className="col-12 my-5">
                    <h2 className="section-title text-center">Our Blog &amp; News</h2>
                </div>
            </div>
            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <img src="https://eyecareplus.com/wp-content/uploads/2020/07/EyecarePlus-AdultEyes2020-Body-Image02.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title fs-4 my-2">Adult &amp; Senior Eye Exams</h5>
                            <p className="card-text">Comprehensive Eye Care from an Experienced Team</p>
                            <a href="#" className="btn btn-outline-primary custom-btn">Learn More</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src="https://eyecareplus.com/wp-content/uploads/2020/07/EyecarePlus-SupportingImage-Childreneye.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title fs-4 my-2">Kids Eye Exams</h5>
                            <p className="card-text">Give Your Child a Step-Up with Regular Eye Exams</p>
                            <a href="#" className="btn btn-outline-primary custom-btn">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src="https://eyecareplus.com/wp-content/uploads/2020/07/EyecarePlus-SupportingImage-contactlens.jpg" alt="" />
                        <div className="card-body">
                            <h5 className="card-title fs-4 my-2">Contact Lens &amp; Brands</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-outline-primary custom-btn">Learn More</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BlogSection;