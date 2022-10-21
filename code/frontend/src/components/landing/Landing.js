import React from "react";
import Announcement from "../announcement/Announcement";
import NavBar from "../navbar/NavBar";
import LandingIntro from "./LandingIntro";
import Categories from "./Categories";
import Newsletter from "../newsletter/Newsletter";
import Footer from "../footer/Footer";

export default function LandingPage() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <LandingIntro />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}
