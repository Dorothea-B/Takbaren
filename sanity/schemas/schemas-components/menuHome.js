const menuHome = {
    name: 'menuhome',
    title: 'Menu Home',
    type: 'document',
    fields: [

      {
        title: 'Menu Title',
        name: 'menutitle',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Description One',
        name: 'descriptionone',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Description Two',
        name: 'descriptiontwo',
        type: 'string',
        validation: Rule => Rule.required()
      }
      
    ],
  };
  
  export default menuHome;