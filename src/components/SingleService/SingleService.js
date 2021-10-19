import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { singleServiceData } = props
    const { service_id } = singleServiceData
    const serviceUrl = `/service-details/${service_id}`
    return (
        <div className="col">
            <div className="card">
                <img src={singleServiceData.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{singleServiceData.serviceNmae}</h5>
                    <p className="card-text">{singleServiceData.details.slice(0, 300)}</p>
                    <div className="text-center">
                        <Link to={serviceUrl} className="btn btn-outline-primary custom-btn">Check Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleService;