const introTextHome = {
  title: "Intro text home",
  name: "introTextHome",
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
      title: "Link",
      name: "link",
      type: "string",
      // inputComponent: Link,
    },
  ],
};

export default introTextHome;
