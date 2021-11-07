import React from "react";
import Menubar from "../../Shared/Menubar/Menubar";
import AppointmentBenar from "../AppointmentBenar/AppointmentBenar";
import Bennar from "../Bennar/Bennar";
import Exceptional from "../Exceptional/Exceptional";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <Menubar></Menubar>
      <Bennar></Bennar>
      <Services></Services>
      <Exceptional></Exceptional>
      <AppointmentBenar></AppointmentBenar>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </>
  );
};

export default Home;
