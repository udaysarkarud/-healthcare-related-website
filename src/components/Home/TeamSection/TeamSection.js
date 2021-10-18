import React from 'react';
import teamPic from '../../../images/team/1.jpg'

const TeamSection = () => {
    return (
        <section className="container py-5" id="doctorsteam">
            <div>
                <div className="row">
                    <div className="col-12 my-5">
                        <h2 className="section-title text-center">Our Expert Doctors Team</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="team-box">
                            <div className="team-media">
                                <img src={teamPic} alt="" />
                            </div>
                            <div className="text-center my-3">
                                <h3>Johnathan Doe</h3>
                                <p>Cardiologist</p>
                                <ul className="team-social">
                                    <li> <a href=""> <i className="bi bi-facebook" aria-hidden="true"></i> </a> </li>
                                    <li> <a href=""> <i className="bi bi-twitter" aria-hidden="true"></i> </a> </li>
                                    <li> <a href=""> <i className="bi bi-linkedin" aria-hidden="true"></i></a> </li>
                                    <li> <a href=""> <i className="bi bi-instagram" aria-hidden="true"></i></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="team-box">
                            <div className="team-media">
                                <img src={teamPic} alt="" />
                            </div>
                            <div className="text-center my-3">
                                <h3>Johnathan Doe</h3>
                                <p>Cardiologist</p>
                                <ul className="team-social">
                                    <li> <a href=""> <i className="bi bi-facebook" aria-hidden="true"></i> </a> </li>
                                    <li> <a href=""> <i className="bi bi-twitter" aria-hidden="true"></i> </a> </li>
                                    <li> <a href=""> <i className="bi bi-linkedin" aria-hidden="true"></i></a> </li>
                                    <li> <a href=""> <i className="bi bi-instagram" aria-hidden="true"></i></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="team-box">
                            <div className="team-media">
                                <img src={teamPic} alt="" />
                            </div>
                            <div className="text-center my-3">
                                <h3>Johnathan Doe</h3>
                                <p>Cardiologist</p>
                                <ul className="team-social">
                                    <li> <a href=""> <i className="bi bi-facebook" aria-hidden="true"></i> </a> </li>
                                    <li> <a href=""> <i className="bi bi-twitter" aria-hidden="true"></i> </a> </li>
                                    <li> <a href=""> <i className="bi bi-linkedin" aria-hidden="true"></i></a> </li>
                                    <li> <a href=""> <i className="bi bi-instagram" aria-hidden="true"></i></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="team-box">
                            <div className="team-media">
                                <img src={teamPic} alt="" />
                            </div>
                            <div className="text-center my-3">
                                <h3>Johnathan Doe</h3>
                                <p>Cardiologist</p>
                                <ul className="team-social">
                                    <li> <a href=""> <i className="bi bi-facebook" aria-hidden="true"></i> </a> </li>
                                    <li> <a href=""> <i className="bi bi-twitter" aria-hidden="true"></i> </a> </li>
                                    <li> <a href=""> <i className="bi bi-linkedin" aria-hidden="true"></i></a> </li>
                                    <li> <a href=""> <i className="bi bi-instagram" aria-hidden="true"></i></a> </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default TeamSection;