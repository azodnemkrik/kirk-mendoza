import React, { useEffect } from 'react';
import icon_CSS from '../images/css.svg';

const Icon_CSS = () => {

	useEffect(() => {

	}, []);

	return (

		<div className="skill">
			<img className="skillIcon" src={icon_CSS} alt="CSS" style={{ width: '100%', maxWidth: '400px' }} />
         <p className='float skillLabel' style={{color: '#639', fontWeight: 'bold'}}>CSS</p>
		</div>
	);
}

export default Icon_CSS;
