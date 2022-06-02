const menuHome = {
    name: 'menuCard',
    title: 'Menu Home',
    type: 'document',
    fields: [
      {
        title: 'Image',
        name: 'image',
        type: 'image',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Menu Title',
        name: 'menuTitle',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Menu Description',
        name: 'menuDescription',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        title: 'Link',
        name: 'menuhref',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
      }


    //   {
    //     name: 'slug',
    //     type: 'slug',
    //     options: { source: 'title' },
    //     validation: (Rule) => Rule.required(),
    //   },
     
      
    ],
  };
  
  export default menuHome;