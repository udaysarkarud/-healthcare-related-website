import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import aboutJpg from '../../images/about.jpg'

const DetailsSingleService = () => {
    const { service_id } = useParams()

    const [singleServiceData, setSingleServiceData] = useState([]);
    useEffect(() => {
        fetch('/servicesdata.json')
            .then(res => res.json())
            .then(data => setSingleServiceData(data))
    }, [])

    const [detailsData] = singleServiceData.filter((details) => details.service_id == service_id)

    return (
        <section className="container custom-section-margin" id="about">
            <div className="row gx-lg-5">
                <div className="col-12 col-md-6">
                    <img style={{ border: "10px solid #0e1a60" }} className="img-fluid" src={detailsData?.thumbnail} alt="" />
                </div>

                <div className="col-12 col-md-6">
                    <h3>{detailsData?.title}</h3>
                    <p className="lead">{detailsData?.details}</p>
                </div>
            </div>
        </section>
    );
};

export default DetailsSingleService;