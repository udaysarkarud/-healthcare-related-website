import React from 'react';
import UseFakeData from '../../../hook/UseFakeData';


const TeamSection = () => {

    const [DoctorsTeam] = UseFakeData('doctorsdata.json')

    return (
        <section className="container py-5" id="doctorsteam">
            <div>
                <div className="row">
                    <div className="col-12 my-5">
                        <h2 className="section-title text-center">Our Expert Doctors Team</h2>
                    </div>
                </div>
                <div className="row">
                    {
                        DoctorsTeam.map(singleDoc =>
                            <div className="col-md-4" key={singleDoc.doc_id}>
                                <div className="team-box">
                                    <div className="team-media">
                                        <img src={singleDoc.docImg} alt="" />
                                    </div>
                                    <div className="text-center my-3">
                                        <h5>{singleDoc.docname}, {singleDoc.suffix}</h5>
                                        <p className="fs-6">{singleDoc.specialists_in}</p>
                                        <ul className="team-social">
                                            <li> <a href="https://www.facebook.com/"> <i className="bi bi-facebook" aria-hidden="true"></i> </a> </li>
                                            <li> <a href="https://www.facebook.com/"> <i className="bi bi-twitter" aria-hidden="true"></i> </a> </li>
                                            <li> <a href="https://www.linkedin.com/"> <i className="bi bi-linkedin" aria-hidden="true"></i></a> </li>
                                            <li> <a href="https://www.instagram.com/"> <i className="bi bi-instagram" aria-hidden="true"></i></a> </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamSection;