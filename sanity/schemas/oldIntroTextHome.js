const introTextHome = {
    name: 'welcomeText',
    title: 'Welcome Text',
    type: 'document',
    fields: [
      {
        title: 'Welcome Title',
        name: 'welcomeTitle',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        description: 'Auther',
        name: 'auther',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
          type: 'block',
          name: 'blocklink',
          marks: {
              annotations: [
                {
                    name: 'link',
                    type: 'object',
                    title: 'External link',
                    fields: [
                        {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                        },
                        {
                            title: 'open in new tab',
                            name: 'blank',
                            description: '',
                            type: 'boolean'
                        }
                    ]
                  },
              ]
          }
      },
      {
        name: 'slug',
        type: 'slug',
        options: { source: 'title' },
        validation: (Rule) => Rule.required(),
      },
     
      
    ],
  };
  
  export default introTextHome;