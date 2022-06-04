const openHoursHome = {
  title: "Opening Hours Homepage",
  name: "openHoursHome",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default openHoursHome;
