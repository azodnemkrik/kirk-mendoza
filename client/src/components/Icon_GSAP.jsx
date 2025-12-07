import React, { useEffect } from 'react';
import iconGSAP from '../images/gsap.svg';

const Icon_GSAP = ({ className }) => {

	useEffect(() => {

	}, []);

	return (
		<div className="skill">
			<img className={`skillIcon ${className}`} src={iconGSAP} alt="GSAP" style={{ width: '100%', maxWidth: '400px' }} />
			<p className='float skillLabel' style={{color: '#008f37ff', fontWeight: 'bold'}}>GreenSock Animation Platform</p>
		</div>
	);
}

export default Icon_GSAP;
