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

    {
      title: 'Telephone Number',
      name: 'number',
      type: 'string',
    },

    {
      title: 'Email',
      name: 'mail',
      type: 'string',
    },
  ]
};

export default contactHome;