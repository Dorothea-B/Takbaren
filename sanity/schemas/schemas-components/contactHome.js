import React from 'react'
import style from '../Index.module.css';


//Biggest heading
const HeadingDark = props => (
  <div className={style.heading_dark}>{props.children}</div>
);
const HeadingLight = props => (
  <div className={style.heading_light}>{props.children}</div>
);
//Smaller headers, all-caps
const MediumHeadingDark = props => (
  <div className={style.m_heading_dark}>{props.children}</div>
);
const MediumHeadingLight = props => (
  <div className={style.m_heading_light}>{props.children}</div>
);
const MediumHeadingRed = props => (
  <div className={style.m_heading_red}>{props.children}</div>
);

//Subheadings playfair italic
const SubHeadingDark = props => (
  <div className={style.sh_dark}>{props.children}</div>
);
const SubHeadingLight = props => (
  <div className={style.sh_light}>{props.children}</div>
);
const SubHeadingRed = props => (
  <div className={style.sh_red}>{props.children}</div>
);
const SubHeadingPink = props => (
  <div className={style.sh_pink}>{props.children}</div>
);

//Main text playfair cursive
const MainTextDark = props => (
  <div className={style.main_dark}>{props.children}</div>
);
const MainTextLight = props => (
  <div className={style.main_light}>{props.children}</div>
);
const MainTextRed = props => (
  <div className={style.main_red}>{props.children}</div>
);
const MainTextPink = props => (
  <div className={style.main_pink}>{props.children}</div>
);
//Links important
const MainLinkDark = props => (
  <div className={style.main_link_dark}>{props.children}</div>
);
const MainLinkLight = props => (
  <div className={style.main_link_light}>{props.children}</div>
);
//Basic simple text
const RegularTextDark = props => (
  <div className={style.reg_dark}>{props.children}</div>
);
const RegularTextLight = props => (
  <div className={style.reg_light}>{props.children}</div>
);
const RegularTextRed = props => (
  <div className={style.reg_red}>{props.children}</div>
);
const RegularTextPink = props => (
  <div className={style.reg_pink}>{props.children}</div>
);
//Links regular
const RegularLinkDark = props => (
  <div className={style.link_dark}>{props.children}</div>
);
const RegularLinkLight = props => (
  <div className={style.link_light}>{props.children}</div>
);
const RegularLinkRed = props => (
  <div className={style.link_red}>{props.children}</div>
);


const contactHome = {
  title: "Contact Info Homepage",
  name: "contactHome",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      // validation: (Rule) => Rule.required(),
    },
    {
      name: 'story',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Heading Dark', value: 'heading-dark', blockEditor: { render: HeadingDark }},
            {title: 'Heading Light', value: 'heading-light', blockEditor: { render: HeadingLight } },
           
            {title: 'Medium Heading Dark', value: 'm-heading-dark', blockEditor: { render: MediumHeadingDark }},
            {title: 'Medium Heading Light', value: 'm-heading-light', blockEditor: { render: MediumHeadingLight }},
            {title: 'Medium Heading Red', value: 'm-heading-red', blockEditor: { render: MediumHeadingRed }},
            
            {title: 'Sub-Heading Dark', value: 'sh-dark', blockEditor: { render: SubHeadingDark }},
            {title: 'Sub-Heading Light', value: 'sh-light', blockEditor: { render: SubHeadingLight }},
            {title: 'Sub-Heading Red', value: 'sh-red', blockEditor: { render: SubHeadingRed }},
            {title: 'Sub-Heading Pink', value: 'sh-pink', blockEditor: { render: SubHeadingPink }},

            {title: 'Main text Dark', value: 'main-dark', blockEditor: { render: MainTextDark }},
            {title: 'Main text Light', value: 'main-light', blockEditor: { render: MainTextLight }},
            {title: 'Main text Red', value: 'main-red', blockEditor: { render: MainTextRed }},
            {title: 'Main text Pink', value: 'main-pink', blockEditor: { render: MainTextPink }},
           
            {title: 'Main Link Dark', value: 'main-link-dark', blockEditor: { render: MainLinkDark }},
            {title: 'Main Link Light', value: 'main-link-light', blockEditor: { render: MainLinkLight }},

            {title: 'Regular text Dark', value: 'reg-dark', blockEditor: { render: RegularTextDark }},
            {title: 'Regular text Light', value: 'reg-light', blockEditor: { render: RegularTextLight }},
            {title: 'Regular text Red', value: 'reg-red', blockEditor: { render: RegularTextRed }},
            {title: 'Regular text Pink', value: 'reg-pink', blockEditor: { render: RegularTextPink }},
          
            {title: 'Regular Link Dark', value: 'link-dark', blockEditor: { render: RegularLinkDark }},
            {title: 'Regular Link Light', value: 'link-light', blockEditor: { render: RegularLinkLight }},
            {title: 'Regular Link Red', value: 'link-red', blockEditor: { render: RegularLinkRed }},
            

          ]
         
        },
      ],
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Link",
      name: "link",
      type: "string",
      // inputComponent: Link,
    },
  ],
};

export default contactHome;
