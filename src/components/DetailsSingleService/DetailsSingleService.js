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
                    <h3 className="text-center my-2 fw-bolder">{SingledetailsData?.serviceNmae}</h3>
                </div>

                <div className="col-12 col-md-6">
                    <p className="fs-5"><span className="fw-bold">Details: </span> {SingledetailsData?.details}</p>
                    <p className="fs-5"><span className="fw-bold">Symptoms: </span>{SingledetailsData?.symptoms}</p>
                </div>
            </div>
        </section>
    );
};

export default DetailsSingleService;