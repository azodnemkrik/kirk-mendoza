import React, { useEffect } from 'react';
import iconFigma from '../images/figma.svg';

const Icon_Figma = () => {

	useEffect(() => {

	}, []);

	return (
		<div className="skill">
			<img className="skillIcon" src={iconFigma} alt="Figma" style={{ width: '100%', maxWidth: '400px' }} />
			<p className='float skillLabel' style={{color: '#f24e1e', fontWeight: 'bold'}}>Figma</p>
		</div>
	);
}

export default Icon_Figma;
