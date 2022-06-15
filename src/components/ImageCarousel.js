import React from "react";
// import client from "./sanityClient";
import imageUrlBuilder from "@sanity/image-url";

import { useQuery } from "react-query";
import { sanity } from "../sanity";

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source);
// }

const query = `
  *[ _type == 'imageCarousel' ] {  
    "image": image.asset->{url} }
`;

const ImageCarousel = () => {
  const { data = [] } = useQuery("imageCarousel", () => sanity.fetch(query));

  const [imageCarousel] = data;

  if (!imageCarousel) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      <img src={imageCarousel.image.url} />
      <img src={imageCarousel.image.url} />
      <img src={imageCarousel.image.url} />
      <img src={imageCarousel.image.url} />
    </>
  );
};

export default ImageCarousel;
