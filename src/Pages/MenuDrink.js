import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { sanity, imageUrlBuilder } from "../sanity";
// import styles from '../MadLibList.module.css';

import styled from "styled-components/macro";
import "../index.css";

import { PagesHeadingDark, DarkText } from "../globalStyleComponents";

const query = `
  *[ _type == 'menuDrink' ] { title, ingredients, description, prize, slug, image }
`;

const MenuDrink = () => {
  // in this one line, data is fetched from sanity via the sanity client and
  // stored into application state via react-query!
  const { data: menuDrinks } = useQuery("menuDrinks", () =>
    sanity.fetch(query)
  );

  if (!menuDrinks) {
    return <h1>Loading…</h1>;
  }

  return (
    <>
      <ul>
        {/* loop through all of the mabLib and show them in a list */}
        {menuDrinks.map(
          ({ title, ingredients, description, prize, slug, image }) => (
            <li key={slug.current}>
              <DrinkSection>
                <img
                  alt={title}
                  // use the sanity `imageUrlBuilder` to
                  // generate optimized images on the fly
                  src={imageUrlBuilder.image(image).url()}
                />
                <TextWrapper>
                  <PagesHeadingDark>{title}</PagesHeadingDark>
                  <DescriptionText>
                    {ingredients}
                    {description}
                    <Price>
                      <DarkText>{prize}</DarkText>
                    </Price>
                  </DescriptionText>
                </TextWrapper>
              </DrinkSection>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default MenuDrink;

const DrinkSection = styled.section`
  margin-bottom: 8rem;
  display: flex;
`;

const TextWrapper = styled.div`
  background-color: rgba(247, 246, 240, 0.5);
  color: var(--clr-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  width: 300px;
  line-height: 1.4;
  position: absolute;
  right: -24px;

  @media (min-width: 768px) {
    width: 500px;
    padding: 3rem;
  }
`;

const DescriptionText = styled.div`
  font-family: "Playfair Display", serif;
  font-style: italic;
  padding-top: 1rem;

  @media (min-width: 768px) {
    font-size: 1.3em;
  }
`;

const Price = styled.div`
  padding-top: 1rem;
`;