import React from 'react';
import { useParams } from 'react-router';
import UseFakeData from '../../hook/UseFakeData';

const DetailsSingleBlog = () => {
    const { blog_id } = useParams()

    // const [selectedBlogData] = UseFakeData('blogsdata.json');

    // const [SingledetailsData] = selectedBlogData.filter((blogDetailsxx) => blogDetailsxx.blog_id == blog_id)

    // console.log(SingledetailsData)
    // console.log(SingledetailsData.thumbnail)
    // console.log(SingledetailsData.published_date)
    // console.log(SingledetailsData.author)


    const [blogsData] = UseFakeData('blogsdata.json')
    const [singleBlogDetails] = blogsData.filter((detailsxx) => detailsxx.blog_id == blog_id)

    return (
        <section className="container custom-section-margin" id="about">
            <div className="row gx-lg-5">

                <p></p>




                <div className="col-12 col-md-6">
                    <img style={{ border: "10px solid #0e1a60" }} className="img-fluid" src={singleBlogDetails?.thumbnail} alt="" />
                    <h3 className="text-center my-2 fw-bolder">{singleBlogDetails?.title}</h3>
                </div>

                <div className="col-12 col-md-6">
                    <div className="fs-5 mb-3">
                        <span className="fw-bolder me-3">
                            <i className="bi bi-calendar-week"></i>
                            <span className="ms-2">{singleBlogDetails?.published_date}</span>
                        </span>

                        <span className="fw-bolder ms-3">
                            <i className="bi bi-person-circle"></i>
                            <span className="ms-2">{singleBlogDetails?.author}</span>
                        </span>
                    </div>
                    <p className="fs-5 ">{singleBlogDetails?.details.slice(0, 800)}</p>
                    <p className="fs-5"></p>
                </div>

            </div>
        </section>
    );
};

export default DetailsSingleBlog;