import React from "react";

import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { sanity, imageUrlBuilder } from "../sanity";
import styles from "../MadLibList.module.css";

const query = `
  *[ _type == 'menuCard' ] { menuTitle, image, menuhref }
`;

const MenuHome = () => {
  // in this one line, data is fetched from sanity via the sanity client and
  // stored into application state via react-query!
  const { data: menuHome } = useQuery("menuHomeTextDescriptionTest", () =>
    sanity.fetch(query)
  );

  // if we don't have madLibs yet, then the data must be loading
  // if (!madLibs) {
  //   return <h1>Loading…</h1>;
  // }

  return (
    <>
      <h1>This is the Menu Home component</h1>



    </>
  );
};

export default MenuHome;
