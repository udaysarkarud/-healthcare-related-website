import React from 'react';
import UseFakeData from '../../hook/UseFakeData';
import SingleBlog from '../SingleBlog/SingleBlog';

const Blogs = () => {
    const [blogsData] = UseFakeData('blogsdata.json')
    return (
        <section className="container custom-section-margin" id="about">
            <div className="row g-5">
                {
                    blogsData.map(singlePost => <SingleBlog SingleBlogData={singlePost} key={singlePost.blog_id} />)
                }
            </div>
        </section>

    );
};

export default Blogs;