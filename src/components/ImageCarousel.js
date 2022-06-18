import React from "react";
// import client from "./sanityClient";
import { sanity, imageUrlBuilder } from "../sanity";
import { useQuery } from "react-query";

const query = `
*[ _type == 'imageCarousel' ] {  
  "image": image.asset->{url}
}
`;

// export const imageBuilder = imageUrlBuilder(useQuery.config());


const ImageCarousel = () => {
  const { data = [] } = useQuery("imageCarousel", () => sanity.fetch(query));

  const [imageCarousel] = data;

  if (!imageCarousel) {
    return <h1>Loading…</h1>;
  }
  console.log(imageCarousel);

  return (
    <>
{/* 
    {  imageCarousel.map((img) => {
      <img src={img.item.images.url} alt="takbaren-img" />

    })} */}
    

    </>
  );
};

export default ImageCarousel;
