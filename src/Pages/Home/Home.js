import React from 'react';
import Banner from './Banner';
import Care from './Care';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Care></Care>
           <MakeAppoinment></MakeAppoinment>
           <Testimonials></Testimonials>
           <ContactUs></ContactUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;