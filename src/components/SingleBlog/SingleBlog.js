import React from 'react';

const SingleBlog = (props) => {
    const { SingleBlogData } = props
    const { blog_id } = SingleBlogData
    const blogUrl = `/blog-details/${blog_id}`
    return (
        <div className="col-md-4" >
            <div className="card">
                <img src={SingleBlogData.thumbnail} alt="" />
                <div className="card-body">
                    <i className="bi bi-calendar-week"></i> {SingleBlogData.published_date}

                    <i className="bi bi-person-circle"></i> {SingleBlogData.author}

                    <h5 className="card-title fs-4 my-2">{SingleBlogData.title}</h5>
                    <div className="card-text">{SingleBlogData.details.slice(0, 300)}</div>

                    <div className="text-center mt-3">
                        <button className="btn btn-outline-primary custom-btn">Check Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;