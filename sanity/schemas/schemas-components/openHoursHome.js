const openHoursHome = {   


  name: 'openHoursHome',
  title: 'Opening Hours Homepage',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }
     
  ]

  };
  
  export default openHoursHome;

