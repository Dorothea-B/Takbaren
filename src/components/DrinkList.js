import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { sanity, imageUrlBuilder } from '../sanity';
// import styles from '../MadLibList.module.css';


const query = `
  *[ _type == 'drinkItem' ] { title, ingredients, prize, slug, image }
`;


const DrinkList = () => {

// in this one line, data is fetched from sanity via the sanity client and
  // stored into application state via react-query!
  const { data: drinkList } = useQuery('drinkList', () => sanity.fetch(query));

  if (!drinkList) {
    return <h1>Loading…</h1>;
  };



  return (
    <>
      <ul>
        {/* loop through all of the mabLib and show them in a list */}
        {drinkList.map(({ title, ingredients, prize, slug, image }) => (
          <li key={slug.current}>
    
            <div>
              <img
                alt={title}
                // use the sanity `imageUrlBuilder` to
                // generate optimized images on the fly
                src={imageUrlBuilder.width(425).height(250).image(image).url()}
                width="425px"
                height="250px"
              />
              <h2>{title}</h2>
              <div>{ingredients}</div>
              <div>{prize}</div>

            </div>
          </li>
        ))};
      </ul>
    </>
  ); 
};

export default DrinkList;