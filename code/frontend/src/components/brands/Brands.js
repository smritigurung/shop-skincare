import React from "react";
import Announcement from "../announcement/Announcement";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";
import BrandsLists from "../brands/BrandsLists";
import Newsletter from "../newsletter/Newsletter";

function Brands() {
  return (
    <div>
      <Announcement />
      <NavBar />
      <BrandsLists />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Brands;
