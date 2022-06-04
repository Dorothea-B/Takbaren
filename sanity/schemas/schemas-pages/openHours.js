const openHours = {
  title: "Opening Hours",
  name: "openHours",
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

    {
      title: "Weather Title",
      name: "weatherTitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default openHours;
