const menu = {
  title: "Menu",
  name: "menu",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default menu;
