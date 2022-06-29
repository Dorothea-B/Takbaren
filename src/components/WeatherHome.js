import { useState, useEffect } from "react";
import { round } from "../utils/helpers";
import styled from "styled-components/macro";
import clouds from "../assets/clouds.svg";
import clear from "../assets/clear.svg";
import dust from "../assets/dust.svg";
import fog from "../assets/fog.svg";
import rain from "../assets/rain.svg";
import snow from "../assets/snow.svg";
import squall from "../assets/squall.svg";
import thunderstorm from "../assets/thunderstorm.svg";
import tornado from "../assets/tornado.svg";

import { device } from "../toolcomponents/Devices";
import "../index.css";

import axios from "axios";

const WeatherApp = () => {
  const [weather, setWeather] = useState("");
  const [latlng] = useState({
    lat: 57.64,
    lng: 18.29,
  });
  const [temperature, setTemperature] = useState(0);

  const fetchWeather = async (lat, lng) => {
    const KEY = "a97e7de7f03fde16353def46be2c83e7";
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Visby&units=metric
			`,
      {
        params: {
          lat,
          lon: lng,
          appid: KEY,
        },
      }
    );

    setTemperature(res.data.main.temp);
    setWeather(res.data.weather[0].main);
  };

  useEffect(() => {
    fetchWeather(latlng.lat, latlng.lng);
  });
  return (
    <WeatherCard>
      <WeatherTextDiv>
        <div>
          <WeatherHeading>Takbaren just now:</WeatherHeading>
          <TemperatureText>
            {round(temperature)}
            {"\u00b0"}C
          </TemperatureText>
          <TemperatureDescription>{weather}</TemperatureDescription>
        </div>
      </WeatherTextDiv>
      <WeatherImageDiv>
        <Icon>
          {weather === "Clear" && <img src={clear} alt='sun icon' />}
          {weather === "Rain" && <img src={rain} alt='rain icon' />}
          {weather === "Snow" && <img src={snow} alt='snow icon' />}
          {weather === "Extreme" && (
            <img src={thunderstorm} alt='thunder icon' />
          )}
          {weather === "Clouds" && <img src={clouds} alt='cloud icon' />}
          {weather === "Squall" && <img src={squall} alt='squall icon' />}
          {weather === "Tornado" && <img src={tornado} alt='tornado icon' />}
          {weather === "Fog" && <img src={fog} alt='fog icon' />}
          {weather === "Dust" && <img src={dust} alt='dust icon' />}
        </Icon>
      </WeatherImageDiv>
    </WeatherCard>
  );
};
export default WeatherApp;
export const WeatherCard = styled.section`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  height: 100%;
`;

const WeatherTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-medium);
  flex: 1;
  height: 100%;
  & > * {
    @media ${device.mobileS} {
    }
    @media ${device.mobileL} {
    }
    @media ${device.tablet} {
    }
  }
`;

const WeatherImageDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;

  align-items: center;
  justify-content: center;
`;
const Icon = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;

  & > img {
    height: 100%;
    width: 100%;
  }
`;

export const WeatherHeading = styled.h1`
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-weight: 700;
  text-align: end;
  color: var(--clr-grey);
  margin-bottom: 1rem;

  @media ${device.mobileS} {
    font-size: 1em;
  }
  @media ${device.mobileL} {
    font-size: 1.4em;
  }
  @media ${device.tablet} {
    font-size: 1.5em;
  }
  @media ${device.laptop} {
    font-size: 1.6em;
  }
  @media ${device.desktop} {
    font-size: 2em;
  }
`;

export const TemperatureText = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 6em;
  font-weight: 500;
  color: var(--clr-grey);
  text-align: end;

  @media ${device.mobileS} {
    font-size: 3em;
  }
  @media ${device.mobileL} {
    font-size: 4em;
  }
  @media ${device.tablet} {
    font-size: 4em;
  }
`;
export const TemperatureDescription = styled.h3`
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  font-size: 1.8em;
  font-weight: 500;
  color: var(--clr-grey);
  text-align: end;

  @media ${device.mobileS} {
    font-size: 1em;
  }
  @media ${device.mobileL} {
    font-size: 1.3em;
  }
  @media ${device.tablet} {
    font-size: 1.8em;
  }
  @media ${device.desktop} {
    font-size: 1.5em;
  }
`;

export const WeatherDescription = styled.h3`
  font-family: "Poppins", sans-serif;
  letter-spacing: 0.25em;
  text-transform: lowercase;
  text-align: right;
  color: var(--clr-grey);
`;
