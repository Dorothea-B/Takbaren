import React from 'react';
import BlockContent from '@sanity/block-content-to-react';
import styles from './MadLib.module.css';
import './index.css';
import {
  HeadingDark,
  HeadingLight,
  MediumHeadingDark,
  MediumHeadingLight,
  MediumHeadingRed,
  SubHeadingDark,
  SubHeadingLight,
  SubHeadingRed,
  SubHeadingPink,
  MainTextDark,
  MainTextLight,
  MainTextRed,
  MainTextPink,
  MainLinkDark,
  MainLinkLight,
  RegularTextDark,
  RegularTextLight,
  RegularTextRed,
  RegularTextPink,
  RegularLinkDark,
  RegularLinkLight,
  RegularLinkRed,
} from './globalStyleComponents.js';


const BlockRenderer = (props) => {
 
    const {style = 'normal'} = props.node
  
    if (/^h\d/.test(style)) {
      const level = style.replace(/[^\d]/g, '')
      return React.createElement(style, {className: `heading-${level}`}, props.children)
    }
/////Attempt at automization
    // style.map((styleinput) => {
    //     if (styleinput) {
    //     return <div className={styleinput}>- {props.children}</div>
    //     } else {
    //     return BlockContent.defaultSerializers.types.block(props)
    //     }
    // })
  //////
    if (style === 'blockquote') {
      return <blockquote>- {props.children}</blockquote>
    }
    // if (style === 'title') {
    //   return <div className="title">- {props.children}</div>
    // }

    // else if (style === 'orange') {
    //     return <div className="orange">- {props.children}</div>
    //   }

    // else if (style === 'redtext') {
    //     return <div className="redtext">- {props.children}</div>
    //   }

    else if (style === 'heading-dark') {
        return <HeadingDark> {props.children} </HeadingDark>
      }
    else if (style === 'heading-light') {
        return <HeadingLight> {props.children} </HeadingLight>
      }
    else if (style === 'm-heading-dark') {
        return <MediumHeadingDark> {props.children} </MediumHeadingDark>
      }
    else if (style === 'm-heading-light') {
        return <MediumHeadingLight> {props.children} </MediumHeadingLight>
      }
    else if (style === 'm-heading-red') {
        return <MediumHeadingRed> {props.children} </MediumHeadingRed>
      }
    else if (style === 'sh-dark') {
        return <SubHeadingDark> {props.children} </SubHeadingDark>
      }
    else if (style === 'sh-light') {
        return <SubHeadingLight> {props.children} </SubHeadingLight>
      }
    else if (style === 'sh-red') {
        return <SubHeadingRed> {props.children} </SubHeadingRed>
      }
    else if (style === 'sh-pink') {
        return <SubHeadingPink> {props.children} </SubHeadingPink>
      }
    else if (style === 'main-dark') {
        return <MainTextDark> {props.children} </MainTextDark>
      }
    else if (style === 'main-light') {
        return <MainTextLight> {props.children} </MainTextLight>
      }
    else if (style === 'main-red') {
        return <MainTextRed> {props.children} </MainTextRed>
      }
    else if (style === 'main-pink') {
        return <MainTextPink> {props.children} </MainTextPink>
      }
    else if (style === 'main-link-dark') {
        return <MainLinkDark> {props.children} </MainLinkDark>
      }
    else if (style === 'main-link-light') {
        return <MainLinkLight> {props.children} </MainLinkLight>
      }
    else if (style === 'reg-dark') {
        return <RegularTextDark> {props.children} </RegularTextDark>
      }
    else if (style === 'reg-light') {
        return <RegularTextLight> {props.children} </RegularTextLight>
      }
    else if (style === 'reg-red') {
        return <RegularTextRed> {props.children} </RegularTextRed>
      }
    else if (style === 'reg-pink') {
        return <RegularTextPink> {props.children} </RegularTextPink>
      }
    else if (style === 'link-dark') {
        return <RegularLinkDark> {props.children} </RegularLinkDark>
      }
    else if (style === 'link-light') {
        return <RegularLinkLight> {props.children} </RegularLinkLight>
      }
    else if (style === 'link-red') {
        return <RegularLinkRed> {props.children} </RegularLinkRed>
      }

    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props)
  
}

export default BlockRenderer;


