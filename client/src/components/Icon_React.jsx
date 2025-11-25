import React, { useEffect } from 'react';
import iconReact from '../images/react.svg';

const Icon_React = () => {

	useEffect(() => {

	}, []);

	return (

		<div className="skill">
			<img className="skillIcon" src={iconReact} alt="React" style={{ width: '100%', maxWidth: '400px' }} />
			<p className='float skillLabel' style={{color: '#008db4ff', fontWeight: 'bold'}}>React</p>
		</div>
	);
}

export default Icon_React;
