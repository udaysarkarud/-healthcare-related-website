import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">

                    <div className="col-md-4">
                        <div className="footer-widget">
                            <h3>Contact Us</h3>
                            <ul className="footer-address">
                                <li>
                                    <i className="bi bi-geo-alt-fill"></i>
                                    <div>
                                        <h4>Address</h4>
                                        <p>33 Lorem Ipsum is simply dummy <br />text of the printing</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-telephone-outbound-fill"></i>
                                    <div>
                                        <h4>Phone</h4>
                                        <p> <a href="tel:+0123456789">+0123456789</a></p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-envelope-fill"></i>
                                    <div>
                                        <h4>Email</h4>
                                        <p> <a href="tel:+0123456789">Support@company.com</a></p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="col-md-2">
                        <div className="footer-widget">
                            <h3>Services</h3>
                            <ul className="footer-menu">
                                <li> <a href="#"> Neurology </a> </li>
                                <li> <a href="#"> Eyes care </a> </li>
                                <li> <a href="#"> Pulomonary</a> </li>
                                <li> <a href="#"> Cardiology</a> </li>
                                <li> <a href="#">Dental Care</a> </li>
                                <li> <a href="#">Hepatology</a> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="footer-widget">
                            <h3>Services</h3>
                            <ul className="footer-menu">
                                <li> <a href="#"> Neurology </a> </li>
                                <li> <a href="#"> Eyes care </a> </li>
                                <li> <a href="#"> Pulomonary</a> </li>
                                <li> <a href="#"> Cardiology</a> </li>
                                <li> <a href="#">Dental Care</a> </li>
                                <li> <a href="#">Hepatology</a> </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="footer-widget">
                            <h3>Newsletter</h3>
                            <form>
                                <input type="email" placeholder="Enter Email" className="form-control mb-2" />
                                <input type="submit" value="Subscribe" className="btn btn-white" />
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;