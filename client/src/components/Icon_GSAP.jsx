import React, { useEffect } from 'react';
import iconGSAP from '../images/gsap.svg';

const Icon_GSAP = () => {

	useEffect(() => {

	}, []);

	return (
		<div className="skill">
			<img className="skillIcon" src={iconGSAP} alt="GSAP" style={{ width: '100%', maxWidth: '400px' }} />
			<p className='float skillLabel' style={{color: '#008f37ff', fontWeight: 'bold'}}>GSAP Animation</p>
		</div>
	);
}

export default Icon_GSAP;
