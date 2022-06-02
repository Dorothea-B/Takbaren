const contactHome = {
   
  name: 'contactHome',
  title: 'Contact Info Homepage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
  ]
};

export default contactHome;