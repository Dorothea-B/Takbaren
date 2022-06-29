import React from "react";
import { useQuery } from "react-query";
import { sanity, imageUrlBuilder } from "../sanity";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, Keyboard, Pagination } from "swiper";

import styled from "styled-components/macro";
import "../index.css";
import { DrinkImgHeading } from "../globalStyleComponents";

import MenuDrinkList from "../Pages/MenuDrinkList";

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

  return (
    <>
      <DrinkWrapper>
        <ul>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{
              enabled: true,
            }}
            loop={true}
            grabCursor={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Keyboard, Pagination]}
            className='mySwiper'
          >
            {menuDrinks.map(
              ({ title, ingredients, description, prize, slug, image }) => (
                <DrinkList key={slug.current}>
                  <SwiperSlide>
                    <Img alt={title} src={imageUrlBuilder.image(image).url()} />
                    <TextWrapper>
                      <DrinkImgHeading>{title}</DrinkImgHeading>
                      {/* <DescriptionText>
                      {ingredients}
                      {description}
                      <Price>
                        <DarkText>{prize}</DarkText>
                      </Price>
                    </DescriptionText> */}
                    </TextWrapper>
                  </SwiperSlide>
                </DrinkList>
              )
            )}
          </Swiper>
        </ul>
      </DrinkWrapper>
      <MenuDrinkList />
    </>
  );
};

export default MenuDrink;

const DrinkWrapper = styled.section`
  overflow: hidden;
  position: relative;
  max-width: 350px;
`;

const DrinkList = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  max-width: 350px;
  /* max-width: 250px;

  @media (min-width: 768px) {
    max-width: 350px;
  } */
`;

const TextWrapper = styled.div`
  background: rgba(52, 59, 63, 0.4);
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(52, 59, 63, 0.4) 100%);
  color: var(--clr-grey);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.8rem;
  line-height: 1.4;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

// const DescriptionText = styled.div`
//   font-family: "Playfair Display", serif;
//   font-style: italic;
//   padding-top: 1rem;
//   font-size: 0.9em;

//   @media (min-width: 768px) {
//     font-size: 1.3em;
//   }
// `;

// const Price = styled.div`
//   padding-top: 1rem;
// `;

// Typ 1 bild o text på varannan sida
////////////////////////////////////////////////////////

// import React from "react";
// import { useQuery } from "react-query";
// import { sanity, imageUrlBuilder } from "../sanity";

// import styled from "styled-components/macro";
// import "../index.css";

// import { PagesHeadingDark, DarkText } from "../globalStyleComponents";

// const query = `
//   *[ _type == 'menuDrink' ] { title, ingredients, description, prize, slug, image, index }
// `;

// const MenuDrink = () => {
//   const { data: menuDrinks } = useQuery("menuDrinks", () =>
//     sanity.fetch(query)
//   );

//   if (!menuDrinks) {
//     return <h1>Loading…</h1>;
//   }

//   const drinkItem = (index) => {
//     console.log(index);
//     if (index % 2 === 0) {
//       return "even";
//     } else {
//       return "odd";
//     }
//   };

//   const drinkImg = (index) => {
//     if (index % 2 === 0) {
//       return "oddImg";
//     } else {
//       return "evenImg";
//     }
//   };

//   return (
//     <DrinkWrapper>
//       <ul>
//         {menuDrinks.map(
//           ({ title, ingredients, description, prize, slug, image }, index) => (
//             <DrinkList key={slug.current}>
//               <Img
//                 alt={title}
//                 src={imageUrlBuilder.image(image).url()}
//                 className={drinkImg(index)}
//               />
//               <TextWrapper className={drinkItem(index)}>
//                 <PagesHeadingDark>{title}</PagesHeadingDark>
//                 <DescriptionText>
//                   {ingredients}
//                   {description}
//                   <Price>
//                     <DarkText>{prize}</DarkText>
//                   </Price>
//                 </DescriptionText>
//               </TextWrapper>
//             </DrinkList>
//           )
//         )}
//       </ul>
//     </DrinkWrapper>
//   );
// };

// export default MenuDrink;

// Typ 2 responsive carousel
////////////////////////////////////////////////////////
// import React from "react";
// import { useQuery } from "react-query";
// import { sanity, imageUrlBuilder } from "../sanity";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import styled from "styled-components/macro";
// import "../index.css";

// import { PagesHeadingDark, DarkText } from "../globalStyleComponents";

// const query = `
//   *[ _type == 'menuDrink' ] { title, ingredients, description, prize, slug, image, index }
// `;

// const MenuDrink = () => {
//   const { data: menuDrinks } = useQuery("menuDrinks", () =>
//     sanity.fetch(query)
//   );

//   if (!menuDrinks) {
//     return <h1>Loading…</h1>;
//   }

//   return (
//     <DrinkWrapper>
//       <ul>
//         <Carousel
//           showStatus={false}
//           interval={4000}
//           transitionTime={800}
//           infiniteLoop={true}
//           useKeyboardArrows
//           autoPlay
//         >
//           {menuDrinks.map(
//             ({ title, ingredients, description, prize, slug, image }) => (
//               <DrinkList key={slug.current}>
//                 <Img alt={title} src={imageUrlBuilder.image(image).url()} />
//                 <TextWrapper>
//                   <PagesHeadingDark>{title}</PagesHeadingDark>
//                   <DescriptionText>
//                     {ingredients}
//                     {description}
//                     <Price>
//                       <DarkText>{prize}</DarkText>
//                     </Price>
//                   </DescriptionText>
//                 </TextWrapper>
//               </DrinkList>
//             )
//           )}
//         </Carousel>
//       </ul>
//     </DrinkWrapper>
//   );
// };

// export default MenuDrink;
