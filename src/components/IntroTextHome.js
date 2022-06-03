import React from 'react'

import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { sanity, imageUrlBuilder } from '../sanity';


//Queries 2 olika varianter

const query = `
  *[ _type == 'introTextHome' ] { title, image, slug, story }
`;

// const query = `
//   *[ _type == 'introTextHome' ] { title, image, slug, story }
// `;




const IntroTextHome = () => {


  const { data = [] } = useQuery('introText', () => sanity.fetch(query));

  const [introText] = data;

  //fetch av data 2 olika varianter

  // const { data: introText } = useQuery('introTextHome', () => sanity.fetch(query));

  // const { data = [] } = useQuery(slug, () => sanity.fetch(query, { slug }));


  if (!introText) {
    return <h1>Loading…</h1>;
  }






  return (

    <>
    
    <h2>Introtex: {introText.title}</h2>
{/* 

    <img
        alt={introText.title}
        src={imageUrlBuilder.width(425).height(425).image(introText.image).url()}
    />



    <BlockContent
            blocks={introText.story}
            
          />

     */}

    </>
  )
}

export default IntroTextHome