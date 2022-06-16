import React from "react";

import { useQuery } from "react-query";
import { sanity, imageUrlBuilder } from "../sanity";

const query = `
  *[ _type == 'menu' ] { title, description, image, slug }
`;

const Menu = () => {
  // const { data: menu } = useQuery(menu, () => sanity.fetch(query));
  // if (!menu) {
  //   return <h1>Loading…</h1>;
  // }
  // return (
  //   <>
  //     <ul>
  //       {menu.map(({ title, description, image, slug }) => (
  //         <li>
  //           <p>{menu.description}</p>
  //           <img alt={title} src={imageUrlBuilder.image(image).url()} />
  //         </li>
  //       ))}
  //     </ul>
  //   </>
  // );
};
export default Menu;
