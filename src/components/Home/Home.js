import React from 'react';
import useAuthContext from '../../hook/useAuthContext';

const Home = () => {
    const { userProfile } = useAuthContext()
    return (
        <section class="hero-banner" id="home-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 my-5">
                        <div class="banner-text-wrap">
                            <h1 class="text-white">We Provide Best Medical Services</h1>
                            <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy</p>
                            <a href="#" class="btn btn-white">Book Appointment</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;