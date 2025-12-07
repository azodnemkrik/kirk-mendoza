import React, { useEffect } from 'react';
import iconReact from '../images/react.svg';

const Icon_React = ({ className }) => {

	useEffect(() => {

	}, []);

	return (

		<div className="skill">
			<img className={`skillIcon ${className}`} src={iconReact} alt="React" style={{ width: '100%', maxWidth: '400px' }} />
			<p className='float skillLabel' style={{color: '#0054a6ff', fontWeight: 'bold'}}>React</p>
		</div>
	);
}

export default Icon_React;
