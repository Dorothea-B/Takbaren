import React from "react";
// import NotFound from "./NotFound";

import ContactHome from "../components/ContactHome";
import IntroTextHome from "../components/IntroTextHome";
import MenuHome from "../components/MenuHome";
import OpenHoursHome from "../components/OpenHoursHome";
import SocialMediaHome from "../components/SocialMediaHome";
// import WeatherHome from "../components/WeatherHome";
import ScrollUpBtn from "../components/ScrollUpBtn";
import HeaderImg from "../assets/Header-img.jpg";

const Home = () => {
  return (
    <section>
      <img src={HeaderImg} />
      <IntroTextHome />
      <OpenHoursHome />
      <MenuHome />
      {/* <WeatherHome /> */}
      <SocialMediaHome />
      <ContactHome />
      <ScrollUpBtn />
    </section>
  );
};

export default Home;
