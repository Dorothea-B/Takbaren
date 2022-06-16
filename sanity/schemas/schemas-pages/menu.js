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
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
};

export default menu;
