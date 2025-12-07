import React, { useEffect } from 'react';
import iconPhotoShop from '../images/photoshop.svg';

const Icon_PhotoShop = ({ className }) => {

	useEffect(() => {

	}, []);

	return (
		<div className="skill">
			<img className={`skillIcon ${className}`} src={iconPhotoShop} alt="PhotoShop" style={{ width: '100%', maxWidth: '400px' }} />
			<p className='float skillLabel' style={{color: '#026ebcff', fontWeight: 'bold'}}>PhotoShop</p>
		</div>
	);
}

export default Icon_PhotoShop;
