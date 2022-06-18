import React, { useState } from 'react';

import { CrossBtn } from '../globalStyleComponents';

import Cross from '../assets/Cross.png';
import IntroTextHome from './IntroTextHome';

const Crossbtn = () => {
	const [show, setShow] = useState(false);
	// const [hide, setHide] = useState(true);
	return (
		<>
			<CrossBtn onClick={() => setShow((prev) => !prev)}>
				{show && <IntroTextHome></IntroTextHome>}
				<img src={Cross} alt='Cross' />
			</CrossBtn>
		</>
	);
};

export default Crossbtn;
