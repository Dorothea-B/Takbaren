import React from 'react'
// import ComponentBig from '../../src/Pages/testPage.js'

const TinyStyle = props => (
    <span style={{fontFamily: 'Garamond', fontSize: '9px', color: 'red'}}>{props.children}</span>
  )

const BigStyle = props => (
<span style={{fontFamily: 'Poppins', fontSize: '3rem', color: 'blue'}}>{props.children}</span>
)

const BigStyleClass = props => (
    <div className='bigstyleclass'>{props.children}</div>
    )

const SmallStyleClass = props => (
    <div className={'smallstyleclass'}>{props.children}</div>
    )
const RenderComponentBig = props => (
    <ComponentBig>{props.children}</ComponentBig>
    )

// const darkHeader = () => (
//   <span style={{fontWeight: 'bold', color: 'red', fontSize: '3rem'}}>H</span>
//   )

const testPage = {
    title: "Test Page",
    name: "testPage",
    type: "document",
    fields: [

      {
        title: "Title (optional)",
        name: "title",
        type: "string",
      },

    {
    name: 'main_text',
    title: 'Main Text',
    description:
        'This is where you put most of the content.',
    type: 'array',
    of: [
        { 
            title: 'Block',
            type: 'block',
            
            styles: [
                // {title: 'Heading dark', value: 'h1 className="heading-dark"'},
                // {title: 'Sub heading red', value: 'div className="sub-heading-red"'},
                // {title: 'Basic', value: '.regular-text'},


            {
                title: 'Tiny', 
                value: 'very-small-text',
                blockEditor: {
                    render: TinyStyle
                }
            },
            {
                title: 'Huge', 
            value: 'superbig',
            blockEditor: {
                render: BigStyle
            }
            },
            {
                title: 'Big', 
            value: 'bigstyleclass',
            blockEditor: {
                render: BigStyleClass
            }
            },
            {
                title: 'Small', 
            value: 'smallstyleclass',
            blockEditor: {
                render: SmallStyleClass
            }
            },
            
            {
                title: 'Component Big', 
            value: 'ComponentBig',
            blockEditor: {
                render: RenderComponentBig
            }
            },


            ],
            
        }],
    },


    // {
    //     title: 'Block Content',
    //     name: 'blockContent',
    //     type: 'array',
    //     of: [
    //       {
    //         title: 'Block',
    //         type: 'block',
    //         // Styles let you set what your user can mark up blocks with. These
    //         // correspond with HTML tags, but you can set any title or value
    //         // you want and decide how you want to deal with it where you want to
    //         // use your content.
    //         styles: [
    //           {title: 'P-tag', value: 'p'},
    //           {title: 'H1', value: 'h1'},
    //           {title: 'H2', value: 'h2'},
    //           {title: 'H3', value: 'h3'},
    //           {title: 'H4', value: 'h4'},
    //           {title: 'Quote', value: 'blockquote'},
    //           {title: 'Heading dark', value: '.heading-dark'},
    //           {title: 'Sub heading red', value: '.sub-heading-red'},
    //           {title: 'Basic', value: '.regular-text'},
    //           {title: 'Tiny', value: '.very-small-text'},




    //         ],
    //         lists: [{title: 'Bullet', value: 'bullet'}],
    //         // Marks let you mark up inline text in the block editor.
    //         marks: {
    //           // Decorators usually describe a single property – e.g. a typographic
    //           // preference or highlighting by editors.
    //           decorators: [
    //             {title: 'Strong', value: 'strong'},
    //             {title: 'Emphasis', value: 'em'},
    //           ],
    //           // Annotations can be any object structure – e.g. a link or a footnote.
    //           annotations: [
    //             {
    //               title: 'URL',
    //               name: 'link',
    //               type: 'object',
    //               fields: [
    //                 {
    //                   title: 'URL',
    //                   name: 'href',
    //                   type: 'url',
    //                 },
    //               ],
    //             },
    //           ],
    //         },
    //       },
    //       // You can add additional types here. Note that you can't use
    //       // primitive types such as 'string' and 'number' in the same array
    //       // as a block type.
    //       {
    //         type: 'image',
    //         options: {hotspot: true},
    //       },
    //     ],
    //   }



     
    ],
}

export default testPage