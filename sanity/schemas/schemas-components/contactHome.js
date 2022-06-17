
import {
  HeadingDarkF,
  HeadingLightF,
  MediumHeadingDarkF,
  MediumHeadingLightF,
  MediumHeadingRedF,
  SubHeadingDarkF,
  SubHeadingLightF,
  SubHeadingRedF,
  SubHeadingPinkF,
  MainTextDarkF,
  MainTextLightF,
  MainTextRedF,
  MainTextPinkF,
  MainLinkDarkF,
  MainLinkLightF,
  RegularTextDarkF,
  RegularTextLightF,
  RegularTextRedF,
  RegularTextPinkF,
  RegularLinkDarkF,
  RegularLinkLightF,
  RegularLinkRedF,
} from '../StyleRenderers';

const contactHome = {
  title: "Contact Info Homepage",
  name: "contactHome",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    // {
    //   title: "Telephone Number",
    //   name: "number",
    //   type: "string",
    // },

    // {
    //   title: "Email",
    //   name: "mail",
    //   type: "string",
    // },
    {
      name: 'story',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Heading Dark', value: 'heading-dark', blockEditor: { render: HeadingDarkF }},
            {title: 'Heading Light', value: 'heading-light', blockEditor: { render: HeadingLightF }},
           
            {title: 'Medium Heading Dark', value: 'm-heading-dark', blockEditor: { render: MediumHeadingDarkF }},
            {title: 'Medium Heading Light', value: 'm-heading-light', blockEditor: { render: MediumHeadingLightF }},
            {title: 'Medium Heading Red', value: 'm-heading-red', blockEditor: { render: MediumHeadingRedF }},
            
            {title: 'Sub-Heading Dark', value: 'sh-dark', blockEditor: { render: SubHeadingDarkF }},
            {title: 'Sub-Heading Light', value: 'sh-light', blockEditor: { render: SubHeadingLightF }},
            {title: 'Sub-Heading Red', value: 'sh-red', blockEditor: { render: SubHeadingRedF }},
            {title: 'Sub-Heading Pink', value: 'sh-pink', blockEditor: { render: SubHeadingPinkF }},

            {title: 'Main text Dark', value: 'main-dark', blockEditor: { render: MainTextDarkF }},
            {title: 'Main text Light', value: 'main-light', blockEditor: { render: MainTextLightF }},
            {title: 'Main text Red', value: 'main-red', blockEditor: { render: MainTextRedF }},
            {title: 'Main text Pink', value: 'main-pink', blockEditor: { render: MainTextPinkF }},
           
            {title: 'Main Link Dark', value: 'main-link-dark', blockEditor: { render: MainLinkDarkF }},
            {title: 'Main Link Light', value: 'main-link-light', blockEditor: { render: MainLinkLightF }},

            {title: 'Regular text Dark', value: 'reg-dark', blockEditor: { render: RegularTextDarkF }},
            {title: 'Regular text Light', value: 'reg-light', blockEditor: { render: RegularTextLightF }},
            {title: 'Regular text Red', value: 'reg-red', blockEditor: { render: RegularTextRedF }},
            {title: 'Regular text Pink', value: 'reg-pink', blockEditor: { render: RegularTextPinkF }},
          
            {title: 'Regular Link Dark', value: 'link-dark', blockEditor: { render: RegularLinkDarkF }},
            {title: 'Regular Link Light', value: 'link-light', blockEditor: { render: RegularLinkLightF }},
            {title: 'Regular Link Red', value: 'link-red', blockEditor: { render: RegularLinkRedF }},
            
 

          ]
         
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
};

export default contactHome;
