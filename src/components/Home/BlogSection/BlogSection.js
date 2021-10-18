import React from 'react';
import blogImg from '../../../images/blog1.jpg'

const BlogSection = () => {
    return (
        <section className="container my-5" id="blog">
            <div className="row">
                <div className="col-12 my-5">
                    <h2 className="section-title text-center">Blog &amp; News</h2>
                </div>
            </div>
            <div className="row">

                <div className="col-md-4">
                    <div className="card">
                        <img src={blogImg} alt="" />
                        <div className="card-body">
                            <i className="bi bi-calendar-week"></i> 18 Sep 2021
                            <i className="bi bi-person-circle"></i> Admin
                            <h5 className="card-title fs-4 my-2">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card">
                        <img src={blogImg} alt="" />
                        <div className="card-body">
                            <i className="bi bi-calendar-week"></i> 18 Sep 2021
                            <i className="bi bi-person-circle"></i> Admin
                            <h5 className="card-title fs-4 my-2">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <img src={blogImg} alt="" />
                        <div className="card-body">
                            <i className="bi bi-calendar-week"></i> 18 Sep 2021
                            <i className="bi bi-person-circle"></i> Admin
                            <h5 className="card-title fs-4 my-2">Special title treatment</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BlogSection;