const contact = {
   

  name: 'contact',
  title: 'Contact',
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

    {
      title: 'Adress',
      name: 'adress',
      type: 'string',
    },

  ]

  };
  
  export default contact;