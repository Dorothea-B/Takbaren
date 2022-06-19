import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components/macro";
import "../index.css";
import { device } from "../toolcomponents/Devices";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZG9yb3RoZWEtYiIsImEiOiJjbDRlOXBqeWIwMWZxM21ubjBpaWlzZWJ2In0.o6bx6CePhOG6gdhijLBQQQ";


  const MapContainer = styled.div `
  
  display: flex;
      @media ${device.mobileS} {
      height: var(--home-mobile-h);
      width: 100%;
      margin: auto;
      }
      @media ${device.tablet} {
      height: var(--home-dsktp-h);
      width: 100%;
      margin: auto;
      }
      @media ${device.laptop} {
      height: var(--home-dsktp-h);
      }
      
  `
  
 


const MapHome = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // const [lng, setLng] = useState(18.292565198468033);
  // const [lat, setLat] = useState(57.64188017795392);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/dorothea-b/cl4ea652m000114mjgcng4s0t",
      center: [18.292565198468033, 57.64188017795392],
      zoom: zoom,
    });
  });

  return (
    <div>
      <MapContainer ref={mapContainer} />
    </div>
  );
};

export default MapHome;
