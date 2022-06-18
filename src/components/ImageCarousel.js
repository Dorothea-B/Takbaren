import React from "react";
// import client from "./sanityClient";
import { sanity } from "../sanity";
import { useQuery } from "react-query";

const query = `
*[ _type == 'imageCarousel' ] {  
  "image": image.asset->{url}
}
`;

const ImageCarousel = () => {
  const { data = [] } = useQuery("imageCarousel", () => sanity.fetch(query));

  const [imageCarousel] = data;

  if (!imageCarousel) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      <img src={imageCarousel.image.url} alt='takbaren-img' />
    </>
  );
};

export default ImageCarousel;
