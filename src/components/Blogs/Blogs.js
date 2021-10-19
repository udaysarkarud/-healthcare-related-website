import React from 'react';
import UseFakeData from '../../hook/UseFakeData';
import SingleBlogPage from '../SingleBlogPage/SingleBlogPage';

const Blogs = () => {
    const [blogsData] = UseFakeData('blogsdata.json')
    return (
        <section className="container custom-section-margin" id="about">
            <div className="row g-5">
                {
                    blogsData.map(singlePost => <div className="col-md-4">
                        <div className="card">
                            <img src={singlePost.thumbnail} alt="" />
                            <div className="card-body">
                                <i className="bi bi-calendar-week"></i> {singlePost.published_date}
                                <i className="bi bi-person-circle"></i> {singlePost.author}
                                <h5 className="card-title fs-4 my-2">{singlePost.blos_title}</h5>
                                <div className="card-text">{singlePost.details.slice(0, 300)}</div>
                                <a href="#" className="btn btn-outline-primary custom-btn my-3">Go somewhere</a>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </section>

    );
};

export default Blogs;