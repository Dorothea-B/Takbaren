import React from "react";
// import NotFound from "./NotFound";

import ContactHome from "../components/ContactHome";
import HeaderHome from "../components/HeaderHome";
import IntroTextHome from "../components/IntroTextHome";
import MenuHome from "../components/MenuHome";
import OpenHoursHome from "../components/OpenHoursHome";
import SocialMediaHome from "../components/SocialMediaHome";
import WeatherHome from "../components/WeatherHome";
import ScrollUpBtn from "../components/ScrollUpBtn";

const Home = () => {
  return (
    <section>
      <HeaderHome />
      <IntroTextHome />
      <OpenHoursHome />
      <MenuHome />
      <WeatherHome />
      <SocialMediaHome />
      <ContactHome />
      <ScrollUpBtn />
    </section>
  );
};

export default Home;
