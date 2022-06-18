import React from "react";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

import DrinkList from "../components/DrinkList";
// const query = `
//   *[ _type == 'menu' ] { title,
//     "image": image.asset->{url},
//     subTitleOne, descriptionOne, subTitleTwo, descriptionTwo }
// `;
const Menu = () => {
  //   const { data = [] } = useQuery("menu", () => sanity.fetch(query));
  //   const [menu] = data;
  //   if (!menu) {
  //     return <h1>Loading…</h1>;
  //   }
    return (
    <>
      <div>Hello there!</div>
      <DrinkList />
      {/* // <section>
      //   <h2>{menu.title}</h2>
      //   <img src={menu.image.url} />
      //   <h3>{menu.subTitleOne}</h3>
      //   <p>{menu.descriptionOne}</p>
      //   <h3>{menu.subTitleTwo}</h3>
      //   <p>{menu.descriptionTwo}</p>
      // </section> */}
    </>
    );
};
export default Menu;
