import React from "react";
import { useQuery } from "react-query";
import { sanity, imageUrlBuilder } from "../sanity";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

const query = `
*[ _type == 'imageCarousel' ] { title, slug, image }
`;
// // export const imageBuilder = imageUrlBuilder(useQuery.config());

const ImageCarousel = () => {
  const { data: imageCarousel } = useQuery("imageCarousel", () =>
    sanity.fetch(query)
  );
  //   const [imageCarousel] = data;

  //   console.log("imageCarousel", imageCarousel);

  if (!imageCarousel) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      <ul>
        {/* <Carousel> */}
        {imageCarousel.map(({ title, slug, image }) => (
          <li key={slug.current}>
            <img alt={title} src={imageUrlBuilder.image(image).url()} />
            {/* <div>{title}</div> */}
          </li>
        ))}
        {/* </Carousel> */}
      </ul>
    </>
  );
};

export default ImageCarousel;

// import React from "react";
// import { useQuery } from "react-query";
// // import client from "./sanityClient";
// import { sanity, imageUrlBuilder } from "../sanity";

// const query = `
// *[ _type == 'imageCarousel' ] {
//   "image": image.asset->{url}
// }
// `;

// // export const imageBuilder = imageUrlBuilder(useQuery.config());

// const ImageCarousel = () => {
//   const { data: imageCarousel } = useQuery("imageCarousel", () =>
//     sanity.fetch(query)
//   );
//   console.log("carousel", imageCarousel);

//   // const [imageCarousel] = data;

//   if (!imageCarousel) {
//     return <h1>Loading…</h1>;
//   }

//   return (
//     <>
//       <ul>
//         {imageCarousel.map(({ image }) => (
//           <li key={image.current}>
//             <img alt='takbaren' src={imageUrlBuilder.image(image).url()} />
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ImageCarousel;

///////////////////////////////////////////////////
