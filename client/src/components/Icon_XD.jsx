import React, { useEffect } from 'react';
import iconXD from '../images/xd.svg';

const Icon_XD = ({ className }) => {

   useEffect(() => {
   }, []);
   
   return (
      <div className="skill">
         <img className={`skillIcon ${className}`} src={iconXD} alt="Adobe XD" style={{ width: '100%', maxWidth: '400px' }} />
         <p className='float skillLabel' style={{color: '#ff61f6', fontWeight: 'bold'}}>Adobe XD</p>
      </div>
   );
}

export default Icon_XD;