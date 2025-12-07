import React, { useEffect } from 'react';
import iconHTML from '../images/html.svg';

const Icon_HTML = ({ className }) => {

	useEffect(() => {

	}, []);

	return (
		<div className="skill">
			<img className={`skillIcon ${className}`} src={iconHTML} alt="HTML" style={{ width: '100%', maxWidth: '400px' }} />
         <p className='float skillLabel' style={{color: '#e44d26', fontWeight: 'bold'}}>HTML</p>
		</div>
	);
}

export default Icon_HTML;
