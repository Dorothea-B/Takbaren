import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { sanity, imageUrlBuilder } from "../sanity";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import styled from "styled-components/macro";
import "../index.css";

import { PagesHeadingDark, DarkText } from "../globalStyleComponents";

const query = `
  *[ _type == 'menuDrink' ] { title, ingredients, description, prize, slug, image }
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

  return (
    <>
      <ul>
        {/* <Carousel infiniteLoop useKeyboardArrows> */}
        {menuDrinks.map(
          ({ title, ingredients, description, prize, slug, image, index }) => (
            <DrinkList key={slug.current} className={drinkItem(index)}>
              <Img alt={title} src={imageUrlBuilder.image(image).url()} />
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
            </DrinkList>
          )
        )}
        {/* </Carousel> */}
      </ul>
    </>
  );
};

export default MenuDrink;

const DrinkList = styled.section`
  margin-bottom: 8rem;
  /* display: flex; */

  background-color: rgba(247, 246, 240, 0.5);
  color: var(--clr-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  line-height: 1.4;
  width: 600px;
  padding: 3rem;
  max-width: 100%;
  /* position: absolute; */

  .even {
    text-align: left;
  }

  .odd {
    /* right: -24px; */
    text-align: right;
  }
`;

const Img = styled.img`
  max-with: 600px;
`;

const TextWrapper = styled.div`
  /* background-color: rgba(247, 246, 240, 0.5);
  color: var(--clr-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  line-height: 1.4;
  width: 600px;
  padding: 3rem;
  max-width: 100%;
  position: absolute; */

  /* &:nth-child(even) {
    position: absolute;
  }

  &:nth-child(odd) {
    position: absolute;
    right: -24px;
  } */

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
