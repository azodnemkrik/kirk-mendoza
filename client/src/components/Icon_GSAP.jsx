import React, { useEffect } from 'react';
import iconGSAP from '../images/gsap.svg';

const Icon_GSAP = ({ className }) => {

	useEffect(() => {

	}, []);

	return (
		<div className="skill">
			<img className={`skillIcon ${className}`} src={iconGSAP} alt="GSAP" style={{ width: '100%', maxWidth: '400px' }} />
			<p className='float skillLabel' style={{color: '#00ff62ff', fontWeight: 'bold'}}>GreenSock</p>
		</div>
	);
}

export default Icon_GSAP;
