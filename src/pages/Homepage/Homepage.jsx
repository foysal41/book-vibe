import React from "react";
import Banner from "../../components/shared/Navbar/Homepage/Banner";
import AllBooks from "../../components/shared/Navbar/Homepage/AllBooks";
import Highlight_Section from "../../components/shared/Navbar/Homepage/Highlight_Section";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Highlight_Section></Highlight_Section>
      <AllBooks></AllBooks>
    </div>
  );
};

export default Homepage;
