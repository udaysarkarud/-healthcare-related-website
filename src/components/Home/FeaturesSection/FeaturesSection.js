import React from 'react';
import calendarPng from '../../../images/calendar.png';
import staffPng from '../../../images/staff.png';
import ambulancePng from '../../../images/ambulance.png';

const FeaturesSection = () => {
    return (
        <section className="container features-section">
            <div className="row gx-0">

                <div className="col-md-4">
                    <div className="bg1 p-5">
                        <img src={calendarPng} alt="" />
                        <h3 className="text-white">24 Hours Services</h3>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has
                            been the industry's standard dummy text ever since</p>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="bg2 p-5">
                        <img src={staffPng} alt="" />
                        <h3 className="text-white">Professional Staff</h3>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has
                            been the industry's standard dummy text ever since</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="bg3 p-5">
                        <img src={ambulancePng} alt="" />
                        <h3 className="text-white">Emergency Care</h3>
                        <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has
                            been the industry's standard dummy text ever since</p>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default FeaturesSection;