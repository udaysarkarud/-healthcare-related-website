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
                        <p className="text-white">If you are experiencing a life-threatening condition, call 911 or seek emergency medical care by going to your nearest hospital emergency.</p>
                    </div>
                </div>


                <div className="col-md-4">
                    <div className="bg2 p-5">
                        <img src={staffPng} alt="" />
                        <h3 className="text-white">Professional Staff</h3>
                        <p className="text-white">Advantage Medical Professionals is the top nursing staffing agency in the country. We offer a wide range of nursing services.</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="bg3 p-5">
                        <img src={ambulancePng} alt="" />
                        <h3 className="text-white">Emergency Care</h3>
                        <p className="text-white">In an emergency, minutes matter. Know when to go. Learn more about emergency related symptoms or get directions to the ER now.</p>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default FeaturesSection;