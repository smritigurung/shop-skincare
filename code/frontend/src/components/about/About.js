import React from "react";
import Announcement from "../announcement/Announcement";
import NavBar from "../navbar/NavBar";
import AboutStory from "../about/AboutStory";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";

function About() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <AboutStory />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default About;
