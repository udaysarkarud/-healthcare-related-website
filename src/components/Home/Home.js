import React from 'react';
import AboutSection from './AboutSection/AboutSection';
import BannerSection from './BannerSection/BannerSection';
import BlogSection from './BlogSection/BlogSection';
import ContactSection from './ContactSection/ContactSection';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import ServicesSection from './ServicesSection/ServicesSection';
import TeamSection from './TeamSection/TeamSection';


const Home = () => {
    return (
        <>
            <BannerSection />
            <FeaturesSection />
            <AboutSection />
            <ServicesSection />
            <TeamSection />
            <ContactSection />
            <BlogSection />
        </>
    );
};

export default Home;