import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { sanity, imageUrlBuilder } from "../sanity";

import styled from "styled-components/macro";
import "../index.css";

import { PagesHeadingDark, DarkText } from "../globalStyleComponents";

const query = `
  *[ _type == 'menuDrink' ] { title, ingredients, description, prize, slug, image, index }
`;

const MenuDrink = () => {
  const { data: menuDrinks } = useQuery("menuDrinks", () =>
    sanity.fetch(query)
  );

  if (!menuDrinks) {
    return <h1>Loading…</h1>;
  }

  const drinkItem = (index) => {
    console.log(index);
    if (index % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  };

  const drinkImg = (index) => {
    if (index % 2 === 0) {
      return "oddImg";
    } else {
      return "evenImg";
    }
  };

  return (
    <DrinkWrapper>
      <ul>
        {menuDrinks.map(
          ({ title, ingredients, description, prize, slug, image }, index) => (
            <DrinkList key={slug.current}>
              <Img
                alt={title}
                src={imageUrlBuilder.image(image).url()}
                className={drinkImg(index)}
              />
              <TextWrapper className={drinkItem(index)}>
                <PagesHeadingDark>{title}</PagesHeadingDark>
                <DescriptionText>
                  {ingredients}
                  {description}
                  <Price>
                    <DarkText>{prize}</DarkText>
                  </Price>
                </DescriptionText>
              </TextWrapper>
            </DrinkList>
          )
        )}
      </ul>
    </DrinkWrapper>
  );
};

export default MenuDrink;

const DrinkWrapper = styled.section`
  overflow: hidden;
  position: relative;
  width: 1000px;
`;

const DrinkList = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 32rem;
  }
`;

const Img = styled.img`
  max-width: 250px;

  @media (min-width: 768px) {
    max-width: 300px;
  }
`;

const TextWrapper = styled.div`
  background-color: rgba(247, 246, 240, 0.5);
  color: var(--clr-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.8rem;
  line-height: 1.4;
  max-width: 250px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 400px;
    padding: 3rem;
    margin-top: 2rem;
    height: 350px;
  }
`;

const DescriptionText = styled.div`
  font-family: "Playfair Display", serif;
  font-style: italic;
  padding-top: 1rem;
  font-size: 0.9em;

  @media (min-width: 768px) {
    font-size: 1.3em;
  }
`;

const Price = styled.div`
  padding-top: 1rem;
`;
