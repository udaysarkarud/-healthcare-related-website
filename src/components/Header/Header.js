import React from 'react';
import { Link } from 'react-router-dom';
import useAuthContext from '../../hook/useAuthContext';

const Header = () => {
    const { userProfile, handelGoogleSignOut } = useAuthContext()
    return (
        <header>
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="images/logo.png" alt="" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#home-section">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#about-section">About</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " href="#services-section">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#reviews-section">Reviews</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="#team-section">Our Doctors</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " href="#blog-section">Blog</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link " href="#booking-section">Book Appointment</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;