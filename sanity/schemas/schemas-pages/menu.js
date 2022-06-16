const menu = {
  title: "Menu",
  name: "menu",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "array",

      of: [
        {
          title: "Image",
          name: "image",
          type: "image",
          Options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: "Description",
      name: "description",
      type: "string",
    },
  ],
};

export default menu;
