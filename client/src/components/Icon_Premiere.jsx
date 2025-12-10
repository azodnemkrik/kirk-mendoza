import React, { useEffect } from 'react';
import iconPremiere from '../images/premiere.svg';

const Icon_Premiere = ({ className }) => {

	useEffect(() => {

	}, []);

	return (

		<div className="skill">
			<img className={`skillIcon ${className}`} src={iconPremiere} alt="Premiere" style={{ width: '100%', maxWidth: '400px' }} />
			<p className='float skillLabel' style={{color: '#6060ffff', fontWeight: 'bold'}}>Premiere</p>
		</div>
	);
}

export default Icon_Premiere;
