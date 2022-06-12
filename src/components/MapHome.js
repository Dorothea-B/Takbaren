// import React, { useRef, useEffect, useState } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import 'mapbox-gl/dist/mapbox-gl.css';

// const MapHome = () => {
// 	mapboxgl.accessToken =
// 		'pk.eyJ1IjoibWFyaWFubmVhcmRpbiIsImEiOiJjbDQ3Mmc3ZTkwM3drM2tsOXh5NmtqOWhjIn0.yZxjb02HmWVm6P7rG8i8fA';
// 	const mapContainer = useRef(null);
// 	const map = useRef(null);
// 	const [lng] = useState(18.292565198468033);
// 	const [lat] = useState(57.64188017795392);
// 	const [zoom] = useState(17);
// 	useEffect(() => {
// 		if (map.current) return; // initialize map only once
// 		map.current = new mapboxgl.Map({
// 			container: mapContainer.current,
// 			style: 'mapbox://styles/mapbox/streets-v11',
// 			center: [lng, lat],
// 			zoom: zoom,
// 		});

// 		return (
// 			<div>
// 				<div ref={mapContainer} className='map-container' />
// 			</div>
// 		);
// 	});
// };
// export default MapHome;
