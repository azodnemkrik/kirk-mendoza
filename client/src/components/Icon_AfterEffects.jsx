import React, { useEffect } from 'react';
import iconAfterEffects from '../images/after_effects.svg';

const Icon_AfterEffects = ({ className }) => {

	useEffect(() => {

	}, []);

	return (
		<div className="skill">
			<img className={`skillIcon ${className}`} src={iconAfterEffects} alt="After Effects" style={{ width: '100%', maxWidth: '400px' }} />
         <p className='float skillLabel' style={{color: '#6060ffff', fontWeight: 'bold'}}>After Effects</p>
		</div>
	);
}

export default Icon_AfterEffects;
