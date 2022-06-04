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
    {
      title: "Sub title one",
      name: "subTitleOne",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description one",
      name: "descriptionOne",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Sub title two",
      name: "subTitleTwo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description two",
      name: "descriptionTwo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default menu;
