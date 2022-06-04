const menuHome = {
  title: "Menu Home",
  name: "menuHome",
  type: "document",
  fields: [
    {
      title: "Menu Title",
      name: "menuTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description One",
      name: "descriptionOne",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description Two",
      name: "descriptionTwo",
      type: "string",
    },
  ],
};

export default menuHome;
