import React, { useEffect } from 'react';
import iconIllustrator from '../images/illustrator.svg';

const Icon_Illustrator = ({ className }) => {

	useEffect(() => {

	}, []);

	return (
		<div className="skill">
			<img className={`skillIcon ${className}`} src={iconIllustrator} alt="Illustrator" style={{ width: '100%', maxWidth: '400px' }} />
			<p className='float skillLabel' style={{color: '#7e4c00ff', fontWeight: 'bold'}}>Illustrator</p>
		</div>
	);
}

export default Icon_Illustrator;
