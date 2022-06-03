import React from "react";
// import NotFound from "./NotFound";

import ContactHome from "../components/ContactHome";
import HeaderHome from "../components/HeaderHome";
import IntroTextHome from "../components/IntroTextHome";
import MenuHome from "../components/MenuHome";
import NavBarHome from "../components/NavBarHome";
import OpenHoursHome from "../components/OpenHoursHome";
import SocialMediaHome from "../components/SocialMediaHome";
import WeatherHome from "../components/WeatherHome";

const Home = () => {
  return (
    <div>
      <HeaderHome />
      <NavBarHome />
      <IntroTextHome />
      <OpenHoursHome />
      <MenuHome />
      <WeatherHome />
      <SocialMediaHome />
      <ContactHome />
    </div>
  );
};

export default Home;
