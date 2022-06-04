const contact = {
  title: "Contact",
  name: "contact",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Telephone Number",
      name: "number",
      type: "string",
    },

    {
      title: "Email",
      name: "mail",
      type: "string",
    },

    {
      title: "Address",
      name: "address",
      type: "string",
    },
  ],
};

export default contact;
