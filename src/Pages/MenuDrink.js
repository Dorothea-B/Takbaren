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
import { device } from "../toolcomponents/Devices";

const query = `
  *[ _type == 'menuDrink' ] { title, slug, image }
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
      <AlignDrinkItems>
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
              {menuDrinks.map(({ title, slug, image }) => (
                <DrinkList key={slug.current}>
                  <SwiperSlide>
                    <Img alt={title} src={imageUrlBuilder.image(image).url()} />
                    <TextWrapper>
                      <DrinkImgHeading>{title}</DrinkImgHeading>
                    </TextWrapper>
                  </SwiperSlide>
                </DrinkList>
              ))}
            </Swiper>
          </ul>
        </DrinkWrapper>
        <MenuDrinkList />
      </AlignDrinkItems>
    </>
  );
};

export default MenuDrink;

const AlignDrinkItems = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DrinkWrapper = styled.section`
  overflow: hidden;
  position: relative;
  @media ${device.mobileS} {
    width: 250px;
  }
  @media ${device.mobileM} {
    width: 350px;
  }
  @media ${device.mobileL} {
    width: 400px;
  }
  @media ${device.tablet} {
    width: 600px;
  }
  @media ${device.laptop} {
    width: 700px;
  }
`;

const DrinkList = styled.section`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  @media ${device.mobileS} {
    width: 250px;
  }
  @media ${device.mobileM} {
    width: 350px;
  }
  @media ${device.mobileL} {
    width: 400px;
  }
  @media ${device.tablet} {
    width: 600px;
  }
  @media ${device.laptop} {
    width: 700px;
  }
`;

const TextWrapper = styled.div`
  background: linear-gradient(rgb(52, 59, 63, 0.3), transparent);
  background-blend-mode: multiply;
  padding: 1rem;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
