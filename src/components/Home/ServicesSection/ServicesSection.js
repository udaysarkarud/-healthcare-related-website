import React, { useEffect, useState } from 'react';
import UseFakeData from '../../../hook/UseFakeData';
import abc from '../../../images/neurology-icon.png'
import SingleService from '../../SingleService/SingleService';

const ServicesSection = () => {

    const [serviceData] = UseFakeData('servicesdata.json')

    return (
        <section className="services-section py-5" id="services">
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <h2 className="section-title text-center">Our Faithful Services</h2>
                    </div>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        serviceData.map(singleServiceData =>
                            <SingleService singleServiceData={singleServiceData} key={singleServiceData.service_id} />
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;