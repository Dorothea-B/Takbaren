const menu = {
   

  name: 'menu',
  title: 'Menu',
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
  
  export default menu;