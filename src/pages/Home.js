import React from "react";
import Hero from "../components/Hero";
import Banner2 from "../components/Banner2";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner2
          title="Excellent results need sudden people."
          title2="RECRUIT | VET | OUTSOURCE | PROPERTY DEV"
          subtitle="MotivNet is a Recruitment Agency, Outsourcer, Distributor and Property Developer providing services for all types of industries and services in South Africa."
        >
          <Link to="/rooms" className="main-btn">
            I'M LOOKING FOR A JOB
          </Link>
        </Banner2>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
