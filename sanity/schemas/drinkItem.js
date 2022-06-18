

const drinkItem = {
    name: 'drinkItem',
    title: 'Drink',
    type: 'document',
    fields: [
      {
        title: 'Title',
        name: 'title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Ingredients and/or description',
        name: 'ingredients',
        type: 'string',
      },
      {
        title: 'Prize',
        name: 'prize',
        type: 'string',
      },
      {
        name: 'slug',
        type: 'slug',
        options: { source: 'title' },
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        validation: (Rule) => Rule.required(),
      },
     
    ],
  };
  
  export default drinkItem;
  
  