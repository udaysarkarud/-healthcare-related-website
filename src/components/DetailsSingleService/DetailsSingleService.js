import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import UseFakeData from '../../hook/UseFakeData';
import aboutJpg from '../../images/about.jpg'

const DetailsSingleService = () => {
    const { service_id } = useParams()

    const [DetailsData] = UseFakeData('servicesdata.json')

    const [SingledetailsData] = DetailsData.filter((details) => details.service_id == service_id)

    return (
        <section className="container custom-section-margin" id="about">
            <div className="row gx-lg-5">
                <div className="col-12 col-md-6">
                    <img style={{ border: "10px solid #0e1a60" }} className="img-fluid" src={SingledetailsData?.thumbnail} alt="" />
                </div>

                <div className="col-12 col-md-6">
                    <h3>{SingledetailsData?.title}</h3>
                    <p className="lead">{SingledetailsData?.details}</p>
                </div>
            </div>
        </section>
    );
};

export default DetailsSingleService;