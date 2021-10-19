import React from 'react';

const ContactSection = () => {
    return (
        <section className="contact-section bg-overlay" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-col">
                            <h4>Have any Question?</h4>
                            <h3>Feel Free to Contact with us</h3>
                        </div>

                        <form>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Email" />
                                    </div>
                                </div>


                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Message"></textarea>
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <a href="#" className="btn btn-light btn-lg"> Submit</a>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;