// const imageCarousel = {
//   title: "Gallery",
//   name: "gallery",
//   //   type: "object",
//   type: "document",
//   fields: [
//     {
//       title: "Images",
//       name: "images",
//       type: "array",

//       of: [
//         {
//           title: "Image",
//           name: "image",
//           type: "image",
//           Options: {
//             hotspot: true,
//           },
//           fields: [
//             {
//               title: "Alternative text",
//               name: "string",
//               type: "text",
//             },
//           ],
//         },
//       ],
//       options: {
//         layout: "grid",
//       },
//     },
//     {
//       title: "Display as",
//       name: "display",
//       type: "string",
//       description: "How to display images",
//       options: {
//         list: [
//           { title: "Stacked on top of each other", value: "stacked" },
//           { title: "In-line", value: "inline" },
//           { title: "Carousel", value: "carousel" },
//         ],
//         layout: "radio",
//       },
//     },
//     {
//       title: "Zoom enable",
//       name: "zoom",
//       type: "boolean",
//       description: "Should we enable zooming if images?",
//     },
//   ],
//   preview: {
//     select: {
//       images: "images",
//       image: "images.0",
//     },
//     prepare(selection) {
//       const { images, image } = selection;

//       return {
//         title: `Gallery block of ${Object.keys(images).length} images`,
//         subtitle: `Alt text: ${image.alt}`,
//         media: image,
//       };
//     },
//   },
// };

// export default imageCarousel;
